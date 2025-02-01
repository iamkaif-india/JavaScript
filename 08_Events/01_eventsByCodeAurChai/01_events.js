// NOTE: addEventListener() method of the EventTarget interface adds a new event listener for a specified event, on the current document. //
// NOTE: EventTarget is an interface implemented by objects that can receive events and may have listeners for them. //
// syntax of eventListener //
// element.addEventListener(event, function, useCapture)

// let btn = document.querySelector("#santa");

// btn.addEventListener("click", (e) => { // "e" is event object, the more you study this the more you will be stong in js //
//   // alert("Hello, Clicked on Santa")
//   console.log(e);
// }, false);
// To Study:type, timestanp, defaultPrevented, target, toElement, srcElement, currentElement etc //

let body = document.querySelector("body");
let photos = document.querySelector(".photos");
let para = document.querySelector("#para");

function Click(e) {
  console.log(e.target.id)
  if (e.target.id == "heading") {
    body.style.color = "red"
  } // here if clicked id will "hading", function will be called, //

  if (e.target.id == "titli") {
    body.style.backgroundColor = "#16151A"
    body.style.color = "#F9AC4B"
  }

  if (e.target.id == "registan") {
    body.style.backgroundColor = "#4F3C33"
    body.style.color = "#AAC3B6"
  }

  if (e.target.id == "patti") {
    body.style.backgroundColor = "#0E290D"
    body.style.color = "#98BC40"
  }

  if (e.target.id == "santa") {
    body.style.backgroundColor = "#f1eff1"
    body.style.color = "red"
  }

  if (e.target.id == "suraj") {
    // body.style.backgroundColor = "#684D6B"
    // body.style.color = "#FEE2D6"

    body.style.cssText = "background-color:#684D6B; color:#FEE2D6;";
  } // cssText is a property of the document object that is used to set or get the CSS properties of the document. //

};

document.addEventListener("click", Click)