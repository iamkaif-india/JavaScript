/*
1. Veriables
2. Data Types
3. Strings
4. Maths & Numbers
5. Dates & Time
6. Arrays
7. Objects
8. Functions
9. Control Flow
10. Loops
*/
// /*
//******************** 1. Veriables ******************** //
let accountId = 98765;
const emailId = "iamkaif.india@gmail.com";
const password = "12345";
let accountState = "India";

console.log(accountId, emailId, password, accountState);

//******************** 2. Data Types ******************** //

// how to check the data type of a variable
console.log(typeof accountId);

//******************** 3. Strings ******************** //

let firstName = "Mohammad";
let lastName = "Kaif";
let age = 19;

// let fullName = firstName + " " + lastName; // this is outdated way of doing it //

// modern way to do it is this //
let fullName2 = `Hello, I am ${firstName} ${lastName} and I like coding in vscode. I am ${age} years old.`;

console.log(fullName2);
console.log(fullName2.toUpperCase());
console.log(fullName2.toLowerCase());
console.log(fullName2.length);

// STRING METHODS

let userName = "Mohammad Kaif";

// indexOf() is used to find the index of a particular character in a string and chartAt () is used to find the character at a particular index in a string. //

console.log(userName.indexOf("K")); // it will tell the index of this latter in the string //
console.log(userName.charAt(position = 3)); // it will tell the latter at this position in the string //
console.log(userName.charAt(2)); // it will tell the latter at this position in the string //   
console.table([userName.charAt(0), userName.charAt(1), userName.charAt(2), userName.charAt(3)]); // it will tell the latter at this position in the string //

// substring() is used to print the string from a particular index to another index. last index is not included in the output. //

console.log(userName.substring(0, 8)); // it will print the string from 0 to 8 index //
console.log(userName.substring(9)); // it will print the string from 9 to end //

// console.log(userName.slice(9, 13)); // it will print the string from 9 to 13 index //

// trim() is used to remove the extra spaces from the start and end of the string //
let userName2 = "    Mohammad Kaif    ";
console.log(userName2); // it will print the string with extra spaces //
console.log(userName2.trim()); // it will print the string without extra spaces //

//******************** 4. Maths & Numbers ******************** //

let score = 400.8479859;
let score2 = 600;
let highScore = new Number(700.7839);
console.log(highScore);

// FUNCTIONS IN NUMBERS
// console.log(highScore.toString().length); // Get the length of the number as a string
console.log(score.toFixed(4)); // Number with 4 decimal points
console.log(score.toPrecision(6)); // Number with 3 significant digits

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

let randomNum = Math.round (Math.random() * 10);
console.log(randomNum);


//******************** 5. Dates & Time ******************** //

let today = new Date();
console.log(today); // it will give the current date and time. //
console.log(today.toString()); // it will give the current date and time in string format. //
console.log(today.toDateString()); // it will give the current date in string format. //
console.log(today.toTimeString()); // it will give the current time in string format. //

// let birthday = new Date("2005-12-25");
let myBirthday = new Date (2005, 11, 25); // 11 is the month because months are 0 based in JavaScript. months start from 0 to 11. //
console.log (myBirthday);
console.log (myBirthday.toDateString());


//******************** 6. Arrays ******************** //

let friends = ["Arbina", "Sahnaz", "Sabishta", "Saliq", "Maqtoom"];
console.log(friends);
console.log(friends[4].toLocaleUpperCase());
console.log(friends.push("Arbina")); // it will add the element at the end of the array //
console.log(friends.pop()); // it will remove the element from the end of the array //
console.log(friends.unshift("Arbina")); // it will add the element at the start of the array //
console.log(friends.shift()); // it will remove the element from the start of the array //
console.log(friends);
console.table(friends);


//******************** 7. Objects ******************** //

let myObj = {
    name: "Mohammad Kaif",
    sex: "Male",
    age: 19,
    email: "mohammadkaif@gmail.com",
    password: "123456",
    friends: ["Arbina", "Sahnaz", "Sabishta", "Saliq", "Maqtoom"],
    address: {
        city: "Lahore",
        state: "Punjab",
        country: "Pakistan"
    },
};

console.table([myObj.address.city, myObj.address.country]); // this will print the city and country of the address object. //

console.log(myObj.email);
console.log(myObj["email"]); // this will print the value of the email key in an object. //
console.log(myObj.password);
console.log(myObj["password"]); // this will print the value of the password key in an object. //

let friends0 =(myObj.friends); // this will be act like an array //
console.log(friends0);
console.log(friends0[0]);

// OBJECT METHODS //

console.log(Object.keys(myObj)); // this will print the keys of an object. //
console.log(Object.values(myObj)); // this will print the values of an object. //
console.log(Object.entries(myObj)); // this will print the keys and values of an object. //

// ******************** 8. Functions ******************** //

function sum(a, b) {
    return a + b;
};

console.log(sum(2, 3)); // this will print the sum of 2 and 3. //
console.log(sum(84, 56)); // this will print the sum of 84 and 56. //

// ARROW FUNCTION //

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(26, 3)); // this will print the product of 26 and 3. //
















