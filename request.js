// Модуль request

var request = require('request');

// Отправка POST формы
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

// Отправка GET-запроса
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
