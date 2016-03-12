var level = require('level')
var db = level('/tmp/publish.db')
var swarmlog = require('swarmlog')
var log = swarmlog({
  keys: 'zpnnp5YO6PjQF/bxnU88Ybm068QHBGNRN2j6OwDoDk8=.ed25519',
  db: db,
  sodium: require('chloride/browser'),
  valueEncoding: 'json',
  hubs: ['https://signalhub.mafintosh.com']
})

log.createReadStream({ live: true })
  .on('data', console.log)
