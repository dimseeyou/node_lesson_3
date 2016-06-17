// Отправка почтовых сообщений,
// используя модуль nodemailer

var nodemailer = require('nodemailer');

// Создаем транспорт, через который будем отправлять сообщения
var transporter = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: 'login-lesson3@yandex.ru',
    pass: 'myprettypass',
  },
});

// Определяем настройки письма
var mailOptions = {
  from: 'Most friendly guys <login-lesson3@yandex.ru>', // sender address
  to: 'login-lesson3@yandex.ru', // list of receivers
  subject: 'Message', // Subject line
  text: 'Hello from nodemailer!', // plaintext body
  html: '<b>Hello from nodemailer!</b>' // html body
};

// Отправляем сообщение
transporter.sendMail(mailOptions, function(error, info){
  if (error)
    throw error;
  
  console.log('Message info: ', info.response);
  console.log('Full info: ', info);
});
