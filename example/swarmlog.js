var swarmlog = require('swarmlog')
var swarm = swarmlog({
  keys: require('./keys.json'),
  db: require('memdb')(),
  chloride: require('chloride/browser'),
  valueEncoding: 'json',
  hubs: [ 'https://signalhub.mafintosh.com' ]
})
