// ************ DOM IN JAVASCRIPT ************ //

let parent = document.querySelector(".parent"); // Get the parent element //
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[2].innerText);

// for (let i = 0; i < parent.children.length; i++){
//     console.log(parent.children[i].innerText);
// }

let dayOne = document.querySelector(".days");
// console.log(dayOne);
// console.log(dayOne.parentElement); // you can select parent from children //
// console.log(dayOne.nextElementSibling); // this will print next sibling element //

dayOne.style.color = "orange"; // Change the color of the first day //

console.log(`Nodes:`, parent.childNodes); // it will print all the nodes of the parent element, nodes are not just text it also includes comments, lines, etc. //
console.log(`Text:`, parent.textContent); // it will print the text of the parent element //

