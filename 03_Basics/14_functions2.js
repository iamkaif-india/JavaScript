// +++++++++++++ REST OPERATOR IN FUNCTIONS +++++++++++++ //
// The rest operator (...) is a special operator in JavaScript that allows you to collect a variable number of arguments into an array. It is used to pass a variable number of arguments to a function. The rest operator is always placed at the end of the parameter list. //

// making an array of all the arguments passed to the function
function totalPrice(...goodsPrice) {
  return goodsPrice;
};
console.log(totalPrice(600, 738, 800, 684, 30, 100)); // here the output will be an array of all the arguments passed to the function // [600, 738, 800, 684, 30, 100]
// arrays are more managable than objects //

// FUNCTION AND OBJECTS //

let googleUser = {
  userName: "Mohammad Kaif",
  emailId: "mohammadkaif@gmail.com",
  password: "123456",
} // here we have created an object and we have given it some properties //

function handleUser(user) {
  console.log(`Hello ${user.userName} your email id is "${user.emailId}" and your password is "${user.password}"`);
} 

handleUser(googleUser);
console.log(googleUser.userName);

// OBJECT AND ARRAYS //

let myArray = [679, 800, 30, 67, 893, 100];
let myArray2 = [967, 893, 100, 200, 500, 300];

function totalPrice2(...myArray){
  return myArray; // we will use the parameter after return function //
};

console.table(totalPrice2(myArray[0]));


