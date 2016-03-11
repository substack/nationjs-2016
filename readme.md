cooperative p2p infrastructure
in the browser!

James Halliday
https://github.com/substack

nationjs 2016 McLean VA

---
# how we should send files

I want to send you a file.
I should be able to send you my file.

---
# how we actually send files

I want to send you a file.
I upload my file to internet service X.
You download my file from service X.

---
# the problem with third parties

Third parties are great if you want to:

* spy on everyone
* charge everyone rent forever
* sell people's data to advertisers

---
# disintermediation

What if we could get rid of many of these third parties?

How can we do that in the browser?

---
# distributed systems

In a distributed system, clients provide the infrastructure.

---
# thinking in clients

In a distributed system, you do EVERYTHING on the client.

The client is the only place to do anything.

There are only clients, no third-party servers.

---
# competitive distributed systems

Competitive distributed systems enforce scarcity and control.

Example: bitcoin, distributed enterprise databases

---
# cooperation

Cooperative distributed systems create abundance.

Example: bittorrent

---

Information just, like, wants to be free, man.

```
  \|    ,,,
  (m- /|o o|\
  ||_//' - '\\
  '___  ___  \\\
      || | |||
      ||/ \|||
      | ''' ||
```

---
# inevitability

Cooperative distributed systems seem inevitable.

Suddenly an individual developer has the computing
resources of their userbase.

---
# inverse scaling

The more popular the system becomes,
the less expensive it becomes to run.

---
# webrtc

p2p in the browser!

---
# how webrtc works

1. clients generate and exchange SDP messages
2. clients trick router using SDP info
3. clients exchange data

---
# npm packages

* simple-peer
* webrtc-swarm

---
# webrtc-swarm

DEMO: webrtc-swarm

---
# gossip protocols

```
A <-> B <-> C <-> D
^     ^           ^
v     v           v
E     F <-> G <-> H
                  ^
                  v
                  I
```
---
# very simple gossip protocol

If you get a message you haven't seen before,
tell all your friends about it.

---
# gossip protocol tips

Prefix a random unique identifier onto each message:

``` js
var randombytes = require('randombytes')
var msg = 'whatever...'
var line = randombytes(8).toString('hex') + '!' + msg
```

---
# very simple gossip protocol

``` js
var streams = {}, seen = {}
swarm.on('peer', function (stream, id) {
  streams[id] = stream
  stream.pipe(split()).on('data', function (buf) {
    console.log(buf.toString())
    var line = buf + '\n', msgid = line.split(',')[0]
    if (seen[msgid]) return
    seen[msgid] = true
    Object.keys(streams).forEach(function (key) {
      if (key === id) return
      streams[key].write(line)
    })
  })
})
```
---
# data replication

Write data to an append-only log!

Data replication:

```
cat a.log b.log > c.log
```

---
# hyperlog

node+browser append-only log module

---
# hyperlog

DEMO: hyperlog

---
# swarmlog

host a hyperlog over a webrtc-swarm

address of a swarmlog is the public key of the writer

---
# swarmlog

DEMO: swarmlog

---
# kappa architecture

The log is the source of truth.

You can always delete and re-generate the indexes.

---
# hyperlog-index

materialized view (indexes) on a hyperlog

---
# hyperkv

DEMO: hyperkv

---
# what are servers good for?

Servers have good uptime.

Servers are not special.

---
# swarmbot

mirror a swarmlog

good if you have a server and you always
want there to be at least one seeder

---
# webtorrent

bittorrent in the browser

---
# future work

full web webrtc DHT

---

EOF
