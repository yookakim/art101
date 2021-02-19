/*
Lab 13: Loops
Public Domain
*/

function FizzBuzz() {

  var output = document.getElementById("output");

  for (var i = 0; i <= 200; i++) {
    var str = "";
    str += i + ": ";
    if (i % 3 == 0) {
      str += "Fizz!";
    }
    if (i % 5 == 0) {
      str += "Buzz!";
    }
    if (i % 7 == 0) {
      str += "Boom!";
    }
    output.innerHTML += str + "<br>";
  }
}

FizzBuzz();
