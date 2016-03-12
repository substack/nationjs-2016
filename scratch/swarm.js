var wswarm = require('webrtc-swarm')
var signalhub = require('signalhub')
var swarm = wswarm(signalhub('swarm-example', [
  'https://signalhub.mafintosh.com'
]))
swarm.on('peer', function (stream, id) {
  console.log('CONNECTION', id)
  process.stdin.pipe(stream)
  stream.pipe(process.stdout)
})
