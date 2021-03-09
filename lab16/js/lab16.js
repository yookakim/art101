/*
Lab 16: JSON and APIs
Public Domain
*/

var imgElement = document.getElementById("image");
var imgTitle = document.getElementById("imagetitle");
var img = document.createElement("img");

var comicObj = $.ajax({
  type: "GET",
  url: "https://xkcd.com/info.0.json",
  success: function(data) {
    console.log(data);
    img.src = data.img;
    img.alt = data.alt;
    img.title = data.title;
    imgTitle.innerHTML = data.title;
  }
});

imgElement.appendChild(img);
