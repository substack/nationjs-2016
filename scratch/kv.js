var hyperlog = require('hyperlog')
var level = require('level')
var db = level('/tmp/kv.db')
var log = hyperlog(db, { valueEncoding: 'json' })

var hyperkv = require('hyperkv')
var kv = hyperkv({
  log: log,
  db: level('/tmp/kvi.db')
})

kv.get('msg', function (err, values) {
  console.log('values=', values)
})
/*
kv.put('msg', 'HELLO THERE', function (err) {
  console.log('err=', err)
})
*/
