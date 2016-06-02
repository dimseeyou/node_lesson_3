// Work with urls via "url" module

var url = require('url');

var params = url.parse(
  'http://user:pass@host.com:8080/p/a/t/h?query=string#hash',
  true
);

console.log('params is: ', params);

params.hash = '#anotherHash';
params.port = 80;
params.host = 'host.com:80';

console.log(url.format(params));
