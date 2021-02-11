/*
ART101 Lab 9
Public Domain
*/

var outputEl = document.getElementById('output');

var new1El = document.createElement("p");
new1El.innerText = "First new element text!";

var new2El = document.createElement("p");
new2El.innerText = "Second new element text!"

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
