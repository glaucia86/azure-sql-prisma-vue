param environmentName string
param location string = resourceGroup().location

param scmDoBuildDuringDeployment bool = false
param applicationInsightsName string = ''
param keyVaultName string = ''
param appSettings object = {}
param serviceName string
param sku object = {
  name: 'Free'
  tier: 'Free'
}

var abbrs = loadJsonContent('../..//abbreviations.json')
var resourceToken = toLower(uniqueString(subscription().id, environmentName, location))
var tags = { 'azd-env-name': environmentName }

resource web 'Microsoft.Web/staticSites@2022-03-01' = {
  name: '${abbrs.webStaticSites}${serviceName}-${resourceToken}'
  location: location
  tags: union(tags, { 'azd-service-name': serviceName })
  sku: sku
  properties: {
    provider: 'SWA-CLI'
  }

  resource configAppSettings  'config' = {
    name: 'appsettings'
    properties: union(appSettings, 
      {
        SCM_DO_BUILD_DURING_DEPLOYMENT: string(scmDoBuildDuringDeployment)
      },
      !(empty(applicationInsightsName)) ? { APPLICATIONINSIGHTS_CONNECTION_STRING: applicationInsights.properties.ConnectionString } : {},
      !(empty(keyVaultName)) ? { AZURE_KEY_VAULT_ENDPOINT: keyVault.properties.vaultUri } : {})
  }
}

resource applicationInsights 'Microsoft.Insights/components@2020-02-02' existing = if (!(empty(applicationInsightsName))) {
  name: applicationInsightsName
}

module keyVaultAccess '../security/keyvault-access.bicep' = if (!(empty(keyVaultName))) {
  name: '${serviceName}-appservice-keyvault-access'
  params: {
    principalId: web.identity.principalId
    environmentName: environmentName
    location: location
  }
}

resource keyVault 'Microsoft.KeyVault/vaults@2022-07-01' existing = if (!(empty(keyVaultName))) {
  name: keyVaultName
}


output name string = web.name
output uri string = 'https://${web.properties.defaultHostname}'
output principalId string = web.identity.principalId
