// Nodemailer example

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: 'login-lesson3@yandex.ru',
    pass: 'myprettypass',
  },
});

var mailOptions = {
    from: 'Most friendly guys <login-lesson3@yandex.ru>', // sender address
    to: 'login-lesson3@yandex.ru', // list of receivers
    subject: 'Message', // Subject line
    text: 'Hello from nodemailer!', // plaintext body
    html: '<b>Hello from nodemailer!</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ', info.response);
    console.log('Full info: ', info);
});
