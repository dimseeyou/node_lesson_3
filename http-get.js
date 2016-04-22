// Introdution to http module

var http = require('http');

http.get('http://www.google.com/index.html', function(res) {
  console.log('Got response: ', res.statusCode);
  console.log('Got http headers: ', res.headers);

  res.resume();
}).on('error', function(e) {
  console.log('Got error: ', e.message);
});
