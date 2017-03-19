$(document).ready(function(){
  console.log("jQuery sourced from client.js");








//unsure whether global variable will work. Maybe belong within on.clicks


$(".clear").on("click", function(){
  console.log("clear click success");
$(".answerDiv").empty();
$(".values").empty();
});//end of clear on click
 var plusCounter = 0;
 var minusCounter = 0;
 var multiplyCounter = 0;
 var divideCounter = 0;
 var finalAnswer = {};

$(".operatorPlus").on("click", function(){
  console.log("operatorPlus click success");
  plusCounter ++;
  console.log(plusCounter);
  // var valueOne = $("#firstValue").val();             //why couldn't I use div classes
  // var valueTwo = $("#secondValue").val();
  // console.log(valueOne + valueTwo);
  // return firstValue + secondValue
});//end operatorPlus

$(".operatorMinus").on("click", function(){
  console.log("operatorMinus click success");
  minusCounter ++;
  console.log(minusCounter);
});//end operatorMinus

$(".operatorMultiply").on("click", function(){
  console.log("operatorMultiply click success");
  multiplyCounter ++;
  console.log(multiplyCounter);
});//end operatorMultiply

$(".operatorDivide").on("click", function(){
  console.log("operatorDivide click success");
  divideCounter++;
  console.log(divideCounter);
});//end operatorDivide

$(".operatorEquals").on("click", function(){
  console.log("equal click success");
var equation = {};
  var operator = 0;
                        // switch (equation.operator) {
                        //   case plus:
                        //   if(plusCounter == 1) {
                        //     operator = "plus";
                        //   }
                        //     break;
                        //   case minus:
                        //   if(minusCounter == 1) {
                        //     operator = "minus";
                        //   }
                        //     break;
                        //   case multiply:
                        //   if(multiplyCounter == 1) {
                        //     operator = "multiply";
                        //   }
                        //     break;
                        //   case divide:
                        //   if(minusCounter == 1) {
                        //     operator = "divide";
                        //   }
                        //     break;
                        //
                        // }

console.log(operator);
console.log(finalAnswer);
  equation.firstValue = $("#firstValue").val();
  equation.secondValue = $("#secondValue").val();
  equation.operator = operator;
  console.log(firstValue, secondValue);
  console.log(equation);
  $.ajax({
    type: "POST",
    url: "/values",
    data: equation,
    success: function(response){
      console.log("client murk");
      // console.log(response);
    }
  });
});//end equalsOnClick




});//end document ready
