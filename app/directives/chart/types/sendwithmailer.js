var nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    });

    mailOptions = {
        to: 'matewilk@gmail.com'
    };

var send = function (data, callback) {
    mailOptions.from = '"Front End Dev Ninja Request "'+data.email,
    mailOptions.subject = data.subject +' from '+ data.name;
    mailOptions.text = data.message;
    transporter.sendMail(mailOptions, function (error, info) {
        if(error){
            return console.log(error);
        }
        callback(info);
    });
};

module.exports = send;
