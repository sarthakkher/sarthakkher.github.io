"use strict";

window.onload = function() {
  box();
};

function box(){
  var x = 0;
  var y = 0;
  var puzzleArea = document.getElementById("puzzlearea");
  puzzleArea.style.width = "400px";
  puzzleArea.style.height = "400px";
  for (var i = 0; i < 15; i++) {
    if (x == 400) {
      x = 0;
      y += 100;
    }
    var newDiv = document.createElement("div");
    puzzleArea.appendChild(newDiv);
    newDiv.class = "boxes";
    newDiv.innerHTML =  i + 1;
    newDiv.style.fontSize = "40pt";
    newDiv.style.width = "90px";
    newDiv.style.height = "90px";
    newDiv.style.border = "5px solid black";
    newDiv.style.backgroundImage = "url(flash.jpg)";
    newDiv.style.backgroundPosition = -x + "px " + (-y) + "px";
    newDiv.style.position = "absolute";
    newDiv.style.top = y + "px";
    newDiv.style.left = x + "px";
    newDiv.style.textAlign = "center"
    x += 100;
  }
}
