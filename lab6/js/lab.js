/*
ART101 Lab 5
Public Domain
*/

myTransportation = ["car", "bus", "walking"];

myMainRide = {
  make: "Toyota",
  model: "Camry",
  color: "Silver",
  year: 1995,
  age: function() {
    return 2021 - year;
  }
}

document.writeln("Kinds of transportation I use: ", myTransportation, "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
