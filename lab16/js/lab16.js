/*
Lab 16: JSON and APIs
Public Domain
*/

var comicObj = $.ajax({
  type: "GET",
  url: "http://xkcd.com/info.0.json",
  success: function(data) {
    console.log(data);
  }
});
