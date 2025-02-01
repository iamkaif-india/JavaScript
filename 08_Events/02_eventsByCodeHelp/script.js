// ******************** EVENTSLISTENER ************************ //

let heading = document.querySelector(".heading");

function changeText() {
  heading.innerHTML = "Hi, I am Mohammd Kaif and I am a ballb student of cuk"
};
// Adding event listener //
heading.addEventListener("click", changeText);

// changing bg color //

document.querySelector("html").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "red"
})

// remove event listener //
heading.removeEventListener("click", changeText); // here changeText should be same added in addEventListener //

// ******************** DEFAULTPREVENTED ************************ //

let google = document.querySelector("#google");
function openGoogle(e) {
  e.preventDefault(); // this will stop the default behavior //
}

google.addEventListener("click", openGoogle)