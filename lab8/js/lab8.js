/*
ART101 Lab 8
Public Domain
*/

// named functions
function firstThing(test) {
  console.log("Parameter value: " + test + ". This is the first thing.<br>");
}
function secondThing(test) {
  console.log("Parameter value: " + test + ". This is the second thing.<br>");
}
function thirdThing(test) {
  console.log("Parameter value: " + test + ". This is the third thing.<br>");
}

// named function calls
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

// setTimeout and anonymous functions:
setTimeout(function(){
  firstThing("TEST 2");
}, 0);
setTimeout(function(){
  secondThing("TEST 2");
}, 0);
setTimeout(function(){
  thirdThing("TEST 2");
}, 0);

// setTimeout and anonymous functions with delay:
setTimeout(function(){
  firstThing("TEST 3");
}, 3000);
setTimeout(function(){
  secondThing("TEST 3");
}, 1000);
setTimeout(function(){
  thirdThing("TEST 3");
}, 2000);
