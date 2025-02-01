// Adding languages in the list //

function addLang(langName) {
    let lang = document.createElement("li");
    lang.innerHTML = langName;
    document.querySelector(".languages").appendChild(lang);
}; // Adding languages in the list, using function //

addLang("python");
addLang("java");

// Optimize way //

function addLang2(langName2){
    let lang = document.createElement("li");
    lang.appendChild(document.createTextNode(langName2));
    document.querySelector(".languages").appendChild(lang);
}

addLang2("C++");

function addLang3(langName){
    let addLang = document.createElement("li");
    let addedText = document.createTextNode(langName);
    document.querySelector(".languages").appendChild(addedText);
}
addLang3("Rust");

// NOTE: appendChild is only use for adding elements in other element // appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node. //

// Editing languages //

let secLang = document.querySelector("li:nth-child(2)");
secLang.innerHTML = "C#";
secLang.style.backgroundColor = "blue";

// second aproch to replace the language //
let thirdLang = document.querySelector("li:nth-child(3)");
let newLang = thirdLang.innerHTML = "Ruby";
thirdLang.replaceWith(newLang);

// Removing languages //

let lastLang = document.querySelector("li:last-child");
lastLang.remove();

// NOTE: remove() method of the Node interface removes a node from the document. //
