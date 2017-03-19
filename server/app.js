var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/values", function(req, res){
  var values= req.body;
  console.log(values);
  // var answer = {};
  // answer.result = (parseInt(values.firstValue) + parseInt(values.secondValue));
  var answer = (parseInt(values.firstValue) + parseInt(values.secondValue));
  console.log(answer);
  var finalResult = answer.toString();
  console.log(finalResult);

  res.send(finalResult);
  // result.push(answer);
});


// app.post('/', function(req, res){
//   res.sendFile(path.resolve("server/public/views/index.html"));
// });




app.listen(port, function(){
  console.log("app.js Listening on port: ", port);
});
