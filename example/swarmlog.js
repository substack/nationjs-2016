var swarmlog = require('swarmlog')
var swarm = swarmlog({
  keys: require('./keys.json'),
  db: require('memdb')(),
  sodium: require('chloride/browser'),
  valueEncoding: 'json',
  hubs: [ 'https://signalhub.mafintosh.com' ]
})
