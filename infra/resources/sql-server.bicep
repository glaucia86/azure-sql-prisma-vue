@minLength(1)
@description('Resource location')
param location string

@description('Resource tags.')
param tags object

@minLength(1)
@maxLength(63)
@description('The name of the SQL server account. e.g. sql-server-1')
param sqlServerName string

@minLength(1)
@maxLength(128)
@description('The name of the SQL database. e.g. sqldb-db')
param databaseName string

@allowed([
  'DATABASE_DEFAULT'
  'SQL_Latin1_General_CP1_CI_AS'
])
param catalogCollation string = 'SQL_Latin1_General_CP1_CI_AS'

param maxSizeBytes int = 2147483648

@description('The SKU for the database.')
param sku object = {
  name: 'Basic'
  tier: 'Basic'
  capacity: 5
}

@allowed([
  'None'
  'SystemAssigned'
  'SystemAssigned,UserAssigned'
  'UserAssigned'
])
param identityType string = 'SystemAssigned'

@secure()
param administratorLogin string = ''

@secure()
param administratorLoginPassword string = newGuid()

var databaseProperties = {
  collation: catalogCollation
  maxSizeBytes: maxSizeBytes
  catalogCollation: catalogCollation
  zoneRedundant: false
  readScale: 'Disabled'
  requestedBackupStorageRedundancy: 'Geo'
  maintenanceConfigurationId: '/subscriptions/${subscription().subscriptionId}/providers/Microsoft.Maintenance/publicMaintenanceConfigurations/SQL_Default'
  isLedgerOn: false
}

resource sqlServer 'Microsoft.Sql/servers@2022-02-01-preview' = {
  name: sqlServerName
  location: location
  tags: tags
  identity: {
    type: identityType
  }
  properties: {
    administratorLogin: administratorLogin
    administratorLoginPassword: administratorLoginPassword
    version: '12.0'
    publicNetworkAccess: 'Enabled'
    restrictOutboundNetworkAccess: 'Disabled'
  }
}

resource sqlDatabase 'Microsoft.Sql/servers/databases@2022-02-01-preview' = {
  parent: sqlServer
  name: toLower(databaseName)
  location: location
  sku: sku
  properties: databaseProperties
}

resource sqlDatabaseShadow 'Microsoft.Sql/servers/databases@2022-02-01-preview' = {
  parent: sqlServer
  name: toLower('${databaseName}-shadow')
  location: location
  sku: sku
  properties: databaseProperties
}

resource fwRule 'Microsoft.Sql/servers/firewallRules@2021-02-01-preview' = {
  parent: sqlServer
  name: 'AllowAllWindowsAzureIps'
  properties: {
    startIpAddress: '0.0.0.0'
    endIpAddress: '0.0.0.0'
  }
}

#disable-next-line outputs-should-not-contain-secrets
output url string = 'sqlserver://${reference(sqlServer.id).fullyQualifiedDomainName}:1433;database=${sqlDatabase.name};user=${administratorLogin}@${sqlServerName};password=${administratorLoginPassword};encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;'
output name string = sqlDatabase.name

#disable-next-line outputs-should-not-contain-secrets
output urlShadow string = 'sqlserver://${reference(sqlServer.id).fullyQualifiedDomainName}:1433;database=${sqlDatabaseShadow.name};user=${administratorLogin}@${sqlServerName};password=${administratorLoginPassword};encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;'
output nameShadow string = sqlDatabaseShadow.name
