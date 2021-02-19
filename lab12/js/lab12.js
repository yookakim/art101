/*
Lab 12: Conditionals
Public Domain
*/

function sortingHat(str) {
  var length = str.length;
  var mod = length % 4;

  if (mod == 0) {
    return "Gryffindor";
  }
  if (mod == 1) {
    return "Hufflepuff";
  }
  if (mod == 2) {
    return "Slytherin";
  }
  if (mod == 3) {
    return "Ravenclaw";
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var newText = "<p>The Sorting Hat has sorted you into " + house + "!</p>";
  document.getElementById("output").innerHTML = newText;
});
