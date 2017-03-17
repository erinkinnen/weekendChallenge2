var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static('server/public'));

app.listen(port, function(){
  console.log("app.js Listening on port: ", port);
});
