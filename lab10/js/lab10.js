/*
ART101 Lab 10
Public Domain
*/

var outputDiv = document.getElementById("output");
var inputField = document.getElementById("user-name");

function sortName(input) {
  // the prompt method opens a dialog and text input field to store a string to our variable userName.
  var userName = inputField.value;

  // the split method separates a string at the specified character given in the parameter, and returns an array of the separated strings.
  // in this case, our empty quotes in the parameter means the string gets split at each character.
  var nameArray = userName.split('');

  // the sort method sorts an array based on their given values, and since chars in strings are just 8-bit values they can be sorted like numbers
  var nameArraySort = nameArray.sort();

  // opposite of split, the join method combines an array of strings and returns a single string, which is our sorted name output here
  var nameSorted = nameArraySort.join('');
  outputDiv.innerText = nameSorted;
  return nameSorted;
}

document.getElementById("my-button").addEventListener("click", sortName);
