// Run plug server to handle all request to localhost

var http = require('http');
var PORT = 8000;

http
  .createServer(function(request, response) {
    var answer = '<b>Hello world!</b>';


    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': answer.length,
    });

    response.write(answer);
    response.end();
  })
  .listen(PORT, function () {
    console.log("Let's get started: ", PORT);
  });
