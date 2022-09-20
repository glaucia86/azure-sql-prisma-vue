param applicationInsightsName string
param location string
param tags object
param workspaceId string

resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: 'appi-${applicationInsightsName}'
  location: location
  tags: tags
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: workspaceId
  }
}

output connectionString string = applicationInsights.properties.ConnectionString
