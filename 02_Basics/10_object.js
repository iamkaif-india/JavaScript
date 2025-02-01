// +++++++++++++++ OBJECTS +++++++++++++++ //
// Objects are used to store multiple values in a single variable. .objects and events are most important in JavaScript. //

let mySym = Symbol("mySym"); // Define the symbol before using it

let myObject = {
  // we can store any type of data in objects

  firstName: "Mohammad", // key: value pair, here javascript will automatically convert the key into a string //
  lastName: "Kaif",
  age: 19,
  Password: "123456M", // if we write key in double quotes then for accessing the value of this key we have to write bracket notation //
  email: "iamkaif.india@gmail.com",
  [mySym]: "7869", // write the symbol in square brackets to access the value of the symbol //
};

console.log(myObject.firstName); // this is the first way to access the value of a key in an object //
console.log(myObject["lastName"]); // this is the second way to access the value of a key in an object //
console.log(myObject["Password"]); // this is the only way to access the value of a key in an object if the key is written in double quotes //
console.log(myObject[mySym]); // Use the symbol to access the value //

// object freeze method //

let myEmail = "mohammadkaif@google.com";
console.log(myEmail);

Object.freeze(myObject); // freeze the object so that no one can change the value of the object //
myObject.email = myEmail; // change the value of the object, we can freeze the object not any value of the object //
console.log(myObject.email); // the value of the object will not change //

console.log(myObject.isfrozen); // it will tell if the object is frozen or not //












