/*
ART101 Lab X
Public Domain
*/

$(".section").append("<button type='button'>Test</button>");

$( "#Challenge > :button" ).click(function(){
  $("#Challenge").toggleClass("specialChallenge");
});

$( "#Problems > :button" ).click(function(){
  $("#Problems").toggleClass("specialProblems");
});

$( "#Results > :button" ).click(function(){
  $("#Results").toggleClass("specialResults");
});
