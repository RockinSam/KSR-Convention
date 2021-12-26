const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started at port: ' + PORT);
});


app.post('/mailToOffice', (req, res) => {
  mailToOffice(req.body, res);
});


if (process.env.NODE_ENV === 'production') {
  
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}


function mailToOffice(data, res){

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAILER_ID,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });
      
  var mailOptions = {
    from: process.env.MAILER_ID,
    to: process.env.OFFICE_ID,
    subject: data.name + ' is interested.',
    text: (   'Name: ' + data.name
            + '\nPhone: ' + data.phno
            + '\nEmail: ' + data.email
            + '\nMessage: ' + data.msg 
          )
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send(false);
    } else {
      console.log('Email sent: ' + info.response);
      res.send(true);
    }
  });
}
