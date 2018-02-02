**websocket**
```
//client.js
const ws = new WebSocket('ws://localhost:5000')
ws.onopen = function(){
	console.log('connect open')
}
ws.onmessage = function(evt){
	console.log('receive message: '+evt.data)
}
ws.onclose = function(){
	console.log('connect closed')
}
ws.onerror = function(evt){
	console.log('connect error: '+evt.data)
}
ws.send('test message')

//server.js
var ws = require('nodejs-websocket')
var server = ws.createServer(function(conn){
	console.log('new connection')
	conn.on('text', function(str){
		server.connections.forEach(function(conn){
			conn.sendText(str)
		})
	})
	conn.on('close', function(code, reason){
		console.log('connection closed')
	})
}).listen(5000)

var ws = new WebSocket('ws://localhost:5000')
ws.onopen = function(){
	console.log('connection open')
}
ws.opmessage = function(evt){
	console.log('receive message: '+evt.data)
}
ws.onclose = function(){
	console.log('connection colose')
}
ws.onerror = function(){
	console.log('connection error')
}

```