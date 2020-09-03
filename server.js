const {createserver}= require('http');
const compression = require('compression');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const dev = app.get('env') !== 'prodction'

if(!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))
    // set a static folder
  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

if(dev) {
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
  extended: true
  }));
  
}

const server = createserver(app);

app.post('/contact', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const output = `
    <h3>Contact Detail</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    // Step 1
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'bojurier@gmail.com', // generated ethereal user
        pass: 'Ahmed213' // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    //  Step 2
    let mailOptions = {
      from: "rogerw213@gmail.com", // sender address
      to: "bojurier@gmail.com", // list of receivers
      subject: "New Message", // Subject line
      text: req.body.message,
      html: output // html body
    };
    //  Step 3

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('Error occurred' + err.message);
        return process.exit(1);
      }

      console.log('Message Sent: %s' + info.messageId)
      console.log('Message URL:' + nodemailer.getTestMessageUrl(info))
    })
  })
})



const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
server.listen(PORT, err => {
  if(err) throw err;
  console.log('Server Started!');
});
