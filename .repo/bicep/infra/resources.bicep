param environmentName string
param location string = resourceGroup().location
param principalId string = ''

@secure()
param sqlAdminPassword string = ''

@secure()
param appUserPassword string = '' 

// The application frontend
module web 'app/web-staticwebapp.bicep' = {
  name: 'web'
  params: {
    environmentName: environmentName
    location: location
    applicationInsightsName: monitoring.outputs.applicationInsightsName
    keyVaultName: keyVault.outputs.keyVaultName
    appSettings: {
      APPINSIGHTS_INSTRUMENTATIONKEY: monitoring.outputs.applicationInsightsConnectionString
      DATABASE_URL: sqlserver.outputs.sqlDatabaseEndpoint
      SHADOW_DATABASE_URL: sqlserver.outputs.sqlDatabaseEndpointShadow
      FUNCTIONS_EXTENSION_VERSION: '~4'
      FUNCTIONS_WORKER_RUNTIME: 'node'
      SCM_DO_BUILD_DURING_DEPLOYMENT: 'true'
    }
  }
}

// Give the API access to KeyVault
module apiKeyVaultAccess 'core/security/keyvault-access.bicep' = {
  name: 'api-keyvault-access'
  params: {
    environmentName: environmentName
    location: location
    keyVaultName: keyVault.outputs.keyVaultName
    principalId: web.outputs.WEB_IDENTITY_PRINCIPAL_ID
  }
}

// The application database
module sqlserver 'app/sqlserver.bicep' = {
  name: 'sqlserver'
  params: {
    environmentName: environmentName
    location: location
    keyVaultName: keyVault.outputs.keyVaultName
    sqlAdminPassword: sqlAdminPassword
    appUserPassword: appUserPassword 
  }
}

// Store secrets in a keyvault
module keyVault 'core/security/keyvault.bicep' = {
  name: 'keyvault'
  params: {
    environmentName: environmentName
    location: location
    principalId: principalId
  }
}

// Monitor application with Azure Monitor
module monitoring 'core/monitor/monitoring.bicep' = {
  name: 'monitoring'
  params: {
    environmentName: environmentName
    location: location
  }
}

output APPLICATIONINSIGHTS_CONNECTION_STRING string = monitoring.outputs.applicationInsightsConnectionString
output AZURE_COSMOS_CONNECTION_STRING_KEY string = sqlserver.outputs.sqlConnectionStringKey
output AZURE_COSMOS_DATABASE_NAME string = sqlserver.outputs.sqlDatabaseName
output AZURE_COSMOS_ENDPOINT string = sqlserver.outputs.sqlDatabaseEndpoint
output AZURE_KEY_VAULT_ENDPOINT string = keyVault.outputs.keyVaultEndpoint
output WEB_URI string = web.outputs.WEB_URI
output API_URI string = '${web.outputs.WEB_URI}/api'
