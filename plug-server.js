// Run plug server to handle all request to localhost

var http = require('http');
var port = 8000;

function onRequest(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });

  response.write('Hello world!');
  response.end();
}

http.createServer(onRequest).listen(port);

console.log("Let's get started: ", port);
