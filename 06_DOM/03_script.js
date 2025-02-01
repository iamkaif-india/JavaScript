// CREATE ELEMENTS USING JS DOM //

let div = document.createElement("div"); // Create a div element
console.log(div);
div.className = "box"; // Set the class attribute
div.id = "box1"; // Set the id attribute
let text = document.createTextNode("Hello World");  // Create a text node
div.appendChild(text) // Append the text node to the div
document.body.appendChild(div); // Append the div element to the body

