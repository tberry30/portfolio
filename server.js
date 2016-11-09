var express = require('express');
var port = 2900;

var app = express();

app.use('/bower_components', express.static('./bower_components'));
app.use(express.static('./app'));

app.listen(port, function() {
  console.log('Server running at http://localhost:' + port + '/');
});
