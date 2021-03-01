/*
// clicking on this button will run the testFunction function (pure javascript)
document.getElementById("button").addEventListener("click", testFunction);

function testFunction() {
  console.log("button 1 was clicked");
}

$("#button2").on("click", testFunction2);

function testFunction2() {
  console.log("button 2 was clicked");

  // animation, dialog, document manipulation, etc goes here
}
*/

$("#plantselection").on("click", "#button", dialogTest);
$("#plantselection").on("click", "#button2", dialogTest2);
$("#plantselection").on("click", "#button3", dialogTest3);

function dialogTest(){
  $("#dialog").dialog("open");
}

function dialogTest2(){
  $("#dialog2").dialog("open");
}

function dialogTest3(){
  $("#dialog3").dialog("open");
}

$("#dialog").dialog({
  title: "You chose the Pothos plant!",
  modal: true,
  autoOpen: false,
  minWidth: 500,
  minHeight: 350,
});
$("#dialog2").dialog({
  title: "You chose the Chinese Money Plant!",
  modal: true,
  autoOpen: false,
  minWidth: 500,
  minHeight: 350,
});
$("#dialog3").dialog({
  title: "You chose Succulents!",
  modal: true,
  autoOpen: false,
  minWidth: 500,
  minHeight: 350,
});
