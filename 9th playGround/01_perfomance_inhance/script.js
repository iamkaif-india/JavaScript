// code 1 //

// document.querySelector("#heading").style.cssText = "cursor:pointer;"


// function clickTo(e) {
//   for (let i = 1; i <= 100; i++) {
//     let para = document.createElement("p");
//     para.innerHTML = parseInt(Math.random()* 100 + 1);
//     document.body.appendChild(para);
//   }
// }

// document.addEventListener("click", clickTo)

let t1 = performance.now()

let fragment = document.createDocumentFragment();

for (let i = 1; i <= 10; i++) {
  let para = document.createElement("p");
  para.textContent = `${parseInt(Math.random() * 10000 + 1)} `;
  fragment.appendChild(para);
}

document.body.appendChild(fragment);

let t2 = performance.now()


let timeStamp = document.createElement("h2");
timeStamp.innerHTML = `${t2 - t1}`;
document.body.appendChild(timeStamp);

// let body = document.querySelector("body")
// body.style.cssText = "display: flex;"



