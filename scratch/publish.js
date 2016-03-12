var level = require('level')
var db = level('/tmp/publish.db')
var swarmlog = require('swarmlog')
var log = swarmlog({
  keys: require('./keys.json'),
  db: db,
  sodium: require('chloride/browser'),
  valueEncoding: 'json',
  hubs: ['https://signalhub.mafintosh.com']
})

setInterval(function () {
  log.append({ time: Date.now() })
}, 250)
