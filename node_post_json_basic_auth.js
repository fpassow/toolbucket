/*
 * Example of POSTing JSON from Node with HTTP Basic Auth
 */

var http = require('http');

var options = {
    host: 'EXAMPLE.com',
    path: '/FOO/BAR',
    method: 'POST',
    auth: 'USERNAME:PASSWORD',
    headers: {
          'Content-Type': 'application/json; charset=UTF-8'
    }
};

callback = function(response) {
  console.log('Status: ' + response.statusCode);
  console.log('Headers: ' + JSON.stringify(response.headers));
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var obj = {thing: 1};

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write(JSON.stringify(obj));
req.end();
