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
  console.log(values.operator);
  // var answer = {};
  // answer.result = (parseInt(values.firstValue) + parseInt(values.secondValue));
  //*******var answer = (parseInt(values.firstValue) + parseInt(values.secondValue));
  var operator = values.operator;
  console.log(operator);
  var math = function(){
    switch(operator){
    case "plus":
    return (parseInt(values.firstValue) + parseInt(values.secondValue));
    break;
    case "minus":
    return (parseInt(values.firstValue) - parseInt(values.secondValue));
    break;
    case "multiply":
    return (parseInt(values.firstValue) * parseInt(values.secondValue));
    break;
    case "divide":
    return (parseInt(values.firstValue) / parseInt(values.secondValue));
    default:
    "not working";
  }
};
var answer = math();
          
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
