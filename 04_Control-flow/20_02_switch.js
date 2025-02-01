// switch case // switch case is a statement that allows you to execute code depending on different cases.

let day = "x";
switch (day) {
    case 1:
        console.log("SUNDAY");
        break;
    case 2:
        console.log("MONDAY");
        break;
    case "x":
        console.log("TUESDAY");
        break;
    case 4:
        console.log("WEDNESDAY");
        break;
    case 5:
        console.log("THRUSDAY");
        break;
    case 6:
        console.log("FRIDAY");
        break;
    case 7:
        console.log("SATURDAY");
        break;
    default:
        console.log("Invalid day");
        break;
}; // you can use numbers, strings, booleans, null, undefined, or symbols.

let month = "may";
switch(month){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log("31 days");
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log("30 days");
        break;
    case "february":
        console.log("28 or 29 days");
        break;
    default:
        console.log("Invalid month");
}


let userLoggedIn = false; // you can use any data type.
switch (userLoggedIn){
    case true:
        console.log("User is logged in");
        break;
    case false:
        console.log("User is logged out");
        break;
    default:
        console.log("User is not logged in");
        break;
};

// TRUTHY AND FALSY VALUES //

let userEmail = "maqtoom@gmail.com";

if (userEmail) {
    console.log(`Your email is ${userEmail}`);
} else {
    console.log("Please enter your email");
};

/*  NOTES:
    1. Falsy values are values that are considered false when evaluated in a boolean context.
    2. Falsy values:
        - false
        - 0, -0 
        - "" (empty string)
        - null
        - undefined
        - NaN (Not a Number)
        - bigint 0n
    3. Truthy values:
        - true
        - any non-zero number
        - any non-empty string* 
        - any object, {}
        - any array, []
        - any function, function(){}
    4. In JavaScript, the value of a variable or expression can be evaluated in a boolean context, such as in an if statement or a while loop.
*/

// detecting Arrays and Objects, if they are empty or not //

let myArray = [];

if (myArray.length == 0){
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
};

let myObject = {

};

if (Object.keys(myObject).length == 0){
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
};

// Ternary operator // it is a shorthand for if else statement. //

let age = 18;

age >= 18 ? console.log("You can drive") : console.log("You can not drive");

// nullish coalescing operator [??] // null and undefined //

let val1;
// val1 = 5 ?? 10; // 5 will be the value of val1 //
// val1 = null ?? 10; // 10 will be the value of val1 //
// val1 = null ?? null ?? 10; // 10 will be the value of val1 //
// val1 = undefined ?? 10; // 10 will be the value of val1 //

console.log(val1);






