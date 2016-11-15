var express = require('express');
var config = require('./server/config/config');
var bodyParser = require('body-parser');
var sgHelper = require('sendgrid').mail;
var port = 2900;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/contact', function(req, res) {
  var from_email = new sgHelper.Email(req.body.fromEmail);
  var to_email = new sgHelper.Email(config.toEmail);
  var subject = 'Contact submission from timberry.io';
  var content = new sgHelper.Content('text/plain', req.body.content);
  var mail = new sgHelper.Mail(from_email, subject, to_email, content);

  var sg = require('sendgrid')(config.sgKey);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function(error, response) {
    if (response.statusCode === 202) {
      res.status(200).send(response);
    } else {
      res.send(response.statusCode);
    }
    // console.log(response.body)
    // console.log(response.headers)
  });
});

app.use('/bower_components', express.static('./bower_components'));
app.use(express.static('./app'));

app.listen(port, function() {
  console.log('Server running at http://localhost:' + port + '/');
});
