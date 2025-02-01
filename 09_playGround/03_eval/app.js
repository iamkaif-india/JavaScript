let input = document.querySelector('.textBox');
let btn = document.querySelector('#btn');
let result = document.querySelector('#resultText');

let calc = (e) => {
    let val = eval(input.value);
    console.log(val);
    result.innerHTML = val;
};
btn.addEventListener('click', calc)
