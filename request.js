// Request library example

var request = require('request');

request({
  method: 'post',
  uri: 'http://google.com',
  form: {
    key: 'value',
  },
}, function (error, response, body) {
  if (error) {
    return console.error(error);
  }

  console.log(response.statusCode);
  console.log(body);
});


request({
  method: 'get',
  uri: 'http://lj.ru/',
}, function (error, response, body) {
  if (error) {
    return console.error(error);
  }

  console.log(response.statusCode);
  console.log(body);
});
