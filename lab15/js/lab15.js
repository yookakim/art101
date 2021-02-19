/*
Lab 15: AJAX
Public Domain
*/

var requestButton = document.getElementById("activate");
var output = document.getElementById("output");

requestButton.addEventListener("click", function() {
  $.ajax({
    type: 'GET',
    url: "https://api.chucknorris.io/jokes/random",
    success: function(data) {
      console.log(data.value);
      output.innerHTML = JSON.stringify(data);
    },
  });
})
