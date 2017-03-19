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
 var equation = {};
 var finalAnswer = {};

$(".operatorPlus").on("click", function(){
  console.log("operatorPlus click success");
  equation.operator = "plus";
  console.log();
  // var valueOne = $("#firstValue").val();             //why couldn't I use div classes
  // var valueTwo = $("#secondValue").val();
  // console.log(valueOne + valueTwo);
  // return firstValue + secondValue
});//end operatorPlus

$(".operatorMinus").on("click", function(){
  console.log("operatorMinus click success");
  equation.operator = "minus";
});//end operatorMinus

$(".operatorMultiply").on("click", function(){
  console.log("operatorMultiply click success");
  equation.operator = "multiply";
});//end operatorMultiply

$(".operatorDivide").on("click", function(){
  console.log("operatorDivide click success");
  equation.operator = "divide";
});//end operatorDivide

$(".operatorEquals").on("click", function(){
  console.log("equal click success");

// console.log(operator);
console.log(finalAnswer);
  equation.firstValue = $("#firstValue").val();
  equation.secondValue = $("#secondValue").val();
  // equation.operator = operator;
  console.log(firstValue, secondValue);
  console.log(equation);
  $.ajax({
    type: "POST",
    url: "/values",
    data: equation,
    success: function(response){
      console.log("client murk");
      console.log(response);
      $(".answerDiv").append(response);
    }
  });

});//end equalsOnClick




});//end document ready
