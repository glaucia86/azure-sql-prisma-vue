param environmentName string
param location string = resourceGroup().location

param serviceName string = 'web'
param applicationInsightsName string = ''
param appSettings object = {}
param keyVaultName string

module web '../core/host/staticwebapp.bicep' = {
  name: '${serviceName}-staticwebapp-module'
  params: {
    environmentName: environmentName
    location: location
    serviceName: serviceName
    applicationInsightsName: applicationInsightsName
    appSettings: appSettings
    keyVaultName: keyVaultName
    scmDoBuildDuringDeployment: true
  }
}

output WEB_NAME string = web.outputs.name
output WEB_URI string = web.outputs.uri
output WEB_IDENTITY_PRINCIPAL_ID string = web.outputs.principalId
