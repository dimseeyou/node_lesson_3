// Introdution to http module

var http = require('http');

http
  .get('http://www.google.com/index.html', function(res) {
    console.log('response: ', res.statusCode);
    console.log('http headers: ', res.headers);

    res.on('data', function(chunk) {
      console.log('BODY: ', chunk);
    });
    
    res.on('end', function() {
      console.log('No more data in response.');
    })
  })
  .on('error', function(e) {
    console.error('Got error: ', e.message);
  });
