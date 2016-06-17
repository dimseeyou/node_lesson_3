// POST запрос через http модуль

var querystring = require('querystring');
var http = require('http');

// Кодируем данные в формат form-urlencoded
var postData = querystring.stringify({
  msg: 'Hello World!'
});

// Определяем настройки запроса
var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/secretPage',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

// Устанавливаем запрос
var req = http
  .request(options, function(res) {
    console.log('response: ', res.statusCode);
    console.log('http headers: ', res.headers);

    // Событие получения данных
    res.on('data', function(chunk) {
      console.log('BODY: ', chunk.toString());
    });
    
    // Событие окончания получения данных
    res.on('end', function() {
      console.log('No more data in response.');
    });
  })
  .on('error', function(error) {
    throw error;
  });

// Запись тела запроса
req.write(postData);

// Отправка запроса
req.end();
