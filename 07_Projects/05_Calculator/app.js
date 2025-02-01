const inputBox = document.querySelector('#inputBox');
const btn = document.querySelectorAll('button');

let string = "";
const btnArray = Array.from(btn);

btnArray.forEach((btn) => btn.addEventListener('click', (e) => {
    if (e.target.id === "backSpace") {
        string = string.slice(0, -1);
    } else if (e.target.id === "clear") {
        string = "";
    } else if (e.target.id === "=") {
        string = eval(string);
    }
    else {
        string += e.target.id;
    }
    inputBox.value = string;
}))

