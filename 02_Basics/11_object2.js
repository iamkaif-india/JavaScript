// +++++++++++++++  OBJECT +++++++++++++ //

// there are two ways to create an object in JavaScript //
// 1. Object literal
// 2. Object constructor

const javaUser = new Object(); // Object constructor - singleton object //
const javaUser2 = {}; // Object literal - Non-singleton object //
console.table([javaUser, javaUser2]);

const tinderUser = new Object(); // Object constructor - singleton object //
tinderUser.Name = "Salim";
tinderUser.Age = 30;
tinderUser.Email = "salim@google.com";

console.log(Object.keys(tinderUser)); // this will give the keys of the object //
console.log(Object.values(tinderUser)); // this will give the values of the object //
console.log(Object.entries(tinderUser)); // this will give the keys and values of the object, in an array //
console.table(tinderUser);

console.log(tinderUser["Name"]);

// We can make object in an anoter object, its called nested object //

const googleUser = {
  email: "maqtoom@googleuser.com",
  fullName: {
    firstName: "Maqtoom",
    lastName: "Bhatt",
  },
};

console.log(googleUser.fullName.firstName); // this way we can access the object in an object, its called nested object //
console.table([googleUser, googleUser.fullName.firstName, googleUser.email]);

// Assigning the object to another object //

const msUser1 = { 1: "Maqtoom", 2: "Salim", 3: "Bhatt" };
const msUser2 = { 4: "Shabist", 5: "Arbina", 6: "Uzma" };
const msUser3 = { 7: "Zidan", 8: "Anukul", 9: "Shahnaaz" };

const finalUser = { ...msUser1, ...msUser2, ...msUser3 }; // this is spread operator //
// console.log(finalUser);

// some other way to assign the object to another object //

const finalUser2 = Object.assign(msUser1, msUser2, msUser3);
// console.log(finalUser2);

// Object in an Array //

// de-struction of objects //
const course = {
  title: "js course",
  price: 999,
  valdity: "1 year",
  courseInstructor: "Mohammad",
};

const { courseInstructor } = course; // form here when you print courseInstructor, dirct value of courseInstructor will be print, here you can change the key of this key-value pair //
console.log(courseInstructor);


