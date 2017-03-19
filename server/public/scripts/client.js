$(document).ready(function(){
  console.log("jQuery sourced from client.js");


$(".clear").on("click", function(){
  console.log("clear click success");
// $("#answer").empty();
$( '#firstValue' ).val('');
$( '#secondValue' ).val('');
function removeAnswer() {
   $("#answer").remove();
}
removeAnswer(); 
});//end of clear on click

 var equation = {};
 // var finalAnswer = {};

$(".operatorPlus").on("click", function(){
  console.log("operatorPlus click success");
  equation.operator = "plus";
  console.log();
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

  // console.log(finalAnswer);
  equation.firstValue = $("#firstValue").val();
  equation.secondValue = $("#secondValue").val();
  // console.log(firstValue, secondValue);
  console.log(equation);
  $.ajax({
    type: "POST",
    url: "/values",
    data: equation,
    success: function(response){
      console.log("client murk");
      console.log(response);
      $(".answer").append(response);
    }
  });

});//end equalsOnClick




});//end document ready
