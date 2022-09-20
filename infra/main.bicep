targetScope = 'subscription'

@minLength(1)
@maxLength(64)
@description('Name of the the environment which is used to generate a short unique hash used in all resources.')
param name string

@minLength(1)
@description('Primary location for all resources')
param location string

@description('Id of the user or app to assign app roles')
param principalId string = ''

var resourceToken = toLower(uniqueString(subscription().id, name, location))
var tags = { 'azd-env-name': name }

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'rg-${name}'
  location: location
  tags: tags
}

// TODO: make KeyVault optional
var deployKeyVault = false

// Note: Application Insights is required for "azd monitor"
var deployAppInsights = true

module keyVaultResources 'resources/key-vault.bicep' = if (deployKeyVault) {
  name: 'key-vault-resources'
  scope: resourceGroup
  params: {
    enableSoftDelete: false
    keyVaultName: 'kv-${resourceToken}'
    location: location
    roleAssignments: [
      {
        // https://docs.microsoft.com/en-us/azure/key-vault/general/rbac-guide?tabs=azure-cli#azure-built-in-roles-for-key-vault-data-plane-operations
        roleDefinitionId: '4633458b-17de-408a-b874-0445c86b69e6'
        principalType: 'ServicePrincipal'
        principalId: principalId
      }
    ]
    tags: tags
  }
}

module swaResources 'resources/static-sites.bicep' = {
  name: 'static-sites-resources'
  scope: resourceGroup
  params: {
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: deployAppInsights ? applicationInsightsResources.outputs.connectionString : null
      STORAGE_CONNECTION_STRING: storageResources.outputs.connectionString
      DATABASE_URL: databaseResources.outputs.url
      SHADOW_DATABASE_URL: databaseResources.outputs.urlShadow
      AzureWebJobsStorage: storageResources.outputs.connectionString
      FUNCTIONS_EXTENSION_VERSION: '~4'
      FUNCTIONS_WORKER_RUNTIME: 'node'
      SCM_DO_BUILD_DURING_DEPLOYMENT: 'true'
    }
    buildProperties: {
      skipGithubActionWorkflowGeneration: true
    }
    location: location
    staticSiteName: 'stapp-${resourceToken}'
    tags: tags
  }
}

module storageResources 'resources/storage.bicep' = {
  name: 'storage-resources'
  scope: resourceGroup
  params: {
    location: location
    storageName: 'st${resourceToken}'
    tags: tags
  }
}

module logAnalyticsResources 'resources/log-analytics.bicep' = {
  name: 'log-analytics-resources'
  scope: resourceGroup
  params: {
    logAnalyticsName: 'log-${resourceToken}'
    location: location
    tags: tags
  }
}

module applicationInsightsResources 'resources/applicationinsights.bicep' = if (deployAppInsights) {
  name: 'applicationinsights-resources'
  scope: resourceGroup
  params: {
    applicationInsightsName: resourceToken
    location: location
    workspaceId: logAnalyticsResources.outputs.workspaceId
    tags: tags
  }
}

module databaseResources 'resources/sql-server.bicep' = {
  name: 'database-resources'
  scope: resourceGroup
  params: {
    sqlServerName: 'sql-${resourceToken}'
    databaseName: 'sqldb-${resourceToken}'
    administratorLogin: 'prisma-azure'
    location: location
    tags: tags
  }
}

output DATABASE_URL string = databaseResources.outputs.url
output SHADOW_DATABASE_URL string = databaseResources.outputs.urlShadow
output AZURE_LOCATION string = location
output AZURE_TENANT_ID string = tenant().tenantId
