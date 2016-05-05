// Run plug server to handle all request to localhost

var http = require('http');
var PORT = 8000;

http
  .createServer(function(request, response) {
    response.writeHead(200, {
      'Content-Type': 'text/plain',
    });

    response.write('Hello world!');
    response.end();
  })
  .listen(PORT, function () {
    console.log("Let's get started: ", PORT);
  });
