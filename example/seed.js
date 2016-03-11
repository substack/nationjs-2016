var webtorrent = require('webtorrent')
var client = webtorrent()

// file can be a filename, buffer, or stream
var file = Buffer('BEEP BOOP')
client.seed([file], { name: 'hello.txt' }, function (t) {
  console.log(t.magnetURI)
})
