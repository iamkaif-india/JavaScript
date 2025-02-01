let score = 400;
let highScore = new Number(500.7839);
console.log(highScore);

// FUNCTIONS IN NUMBERS
console.log(highScore.toString().length); // Get the length of the number as a string
console.log(score.toFixed(4)); // Number with 4 decimal points
console.log(highScore.toPrecision(3)); // Number with 3 significant digits

let aBigNumber = 100000000000000;
console.log(aBigNumber.toLocaleString("en-IN")); // Number with commas in Indian style

// MATH OBJECT
let newScore = 30.6749;

console.log(Math);
console.log(Math.PI);
console.log(Math.round(newScore)); // Round off the number
console.log(Math.floor(newScore)); // Round down to the nearest integer
console.log(Math.ceil(newScore)); // Round up to the nearest integer
console.log(Math.trunc(newScore)); // Remove the decimal part

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 100); // Random number between 0 and 100
console.log(Math.round(Math.random() * 100)); // Random number between 0 and 100, rounded off