var hyperkv = require('hyperkv')
var kv = hyperkv({
  db: require('memdb')(),
  log: log
})
