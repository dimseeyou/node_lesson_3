// Request library example

var request = require('request');

request({
  method: 'POST',
  uri: 'http://google.com',
  form: {
    key: 'value',
  },
}, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    console.log(response.statusCode);
    console.log(body);
  }
});


request({
  method: 'get',
  uri: 'http://lj.ru',
}, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    console.log(body);
    console.log(response.statusCode);
  }
});
