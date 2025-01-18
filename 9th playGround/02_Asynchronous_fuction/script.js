let heading = document.createElement("h1");
heading.innerText = "Asynchronous fuction";

document.body.appendChild(heading);

setTimeout(() => {
    console.log("Hello")
}, 3000);

function clicked(e) {
    let para = document.createElement("p");
    para.textContent = "Hello, Clicked"
    document.body.appendChild(para);
    setTimeout(function() {
        let para2 = document.createElement("p");
        para2.textContent = "I am Dharkosh";
        document.body.appendChild(para2);
    }, 4000)
}

heading.addEventListener("click", clicked);

heading.style.cssText = "cursor:pointer;";

let body = document.querySelector("body");

function dharkosh(e) {
    body.style.cssText = "background-color: yellow;"
};

document.addEventListener("click", dharkosh);