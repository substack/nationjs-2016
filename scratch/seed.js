var webtorrent = require('webtorrent')
var client = webtorrent()

var buf = new Buffer('BEEP BOOP\n')
client.seed([buf], { name: 'hello.txt' }, function (t) {
  console.log(t.magnetURI)
})
