//node.js to listen on a port and dump
//what it's sent to the console.

net = require('net');
net.createServer(function (socket) {
  socket.on('data', function (data) {
    console.log(data.toString());
  });
}).listen(5000);
console.log("Listening on port 5000\n");
