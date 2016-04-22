// Work with urls via "url" module

var urlLib = require('url');

var params = urlLib.parse(
  'http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true
);

console.log(params);

params.hash = '#anotherHash';
params.port = 80;
params.host = 'host.com:80';

console.log(urlLib.format(params));
