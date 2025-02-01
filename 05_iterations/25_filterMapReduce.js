let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter //

let multi = myArray.filter( (number) => number > 5);
console.log(multi);

// map //

let square = myArray.map( (number) => number * number);
console.log(square);

// reduce //

let sum = myArray.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
