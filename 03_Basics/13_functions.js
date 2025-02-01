// ++++++++++++++ Functions +++++++++++++++ //
// functions are a block of code that can be used to perform a task or calculate a value. They are used to break down a complex problem into smaller, more manageable parts. //

function sayMyName() {
  console.log("Mohammad Kaif");
} // this is the basic definition of a function //

sayMyName(); // this is the basic call of a function, we have to call the function to use it //

// NOTE: Functions are used to perform a task or calculate a value.

// ++++++++++++++ Function Arguments +++++++++++++++ //
// Function arguments are the values that are passed to a function when it is called. They are used to pass data to a function and can be used to perform a task or calculate a value.

const add = function (num1, num2) {
  return num1 + num2; // return is used to return the value of the function.
};

let result = add(78, 4);
// console.log(result);

function whenUserLoggedIn(userName) {
  return `Hello, ${userName} how are you?`;
}; // you can store this function in a variable, that veriable can be used to call the function.

console.log(whenUserLoggedIn("Mohammad Kaif")); //

function logIn(userName2) {
  if (userName2 === "" || userName2 === null) {
    return "Please enter your name";
  }
  else {
    return `Welcome, ${userName2} bro!`;
  }
}

console.log(logIn("Mohammad Kaif"));

// ++++++++++++++ Arrow Functions +++++++++++++++ //
// Arrow functions are a new way to write functions in JavaScript. They are shorter and easier to read than regular functions.

/**
 * Checks if a given password is valid.
 * @param {string} Password The password to check.
 * @returns {string} A message indicating whether the password is valid or not.
 */
let isPasswordValid = (Password) => {
  if (Password === "123456M") {
    return `Your Password ${Password} is valid`
  }
  else {
    return `Your Password "${Password}" is wrong`
  }
};

let output = isPasswordValid("1234j56M");
console.log(output);
