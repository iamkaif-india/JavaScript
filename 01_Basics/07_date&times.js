//+++++++++++++++  DATE OBJECT +++++++++++++++++++//

let today = new Date();
console.log(today); // it will give the current date and time. //
console.log(today.toString()); // it will give the current date and time in string format. //
console.log(today.toDateString()); // it will give the current date in string format. //
console.log(today.toTimeString()); // it will give the current time in string format. //
console.log(today.toUTCString()); // it will give the current date and time in UTC format. //

// let birthday = new Date("2005-12-25");
let myBirthday = new Date(2005, 11, 25); // 11 is the month because months are 0 based in JavaScript. months start from 0 to 11. //
console.log(myBirthday);
console.log(myBirthday.toDateString());
// more on data object will be discussed in upcoming days. //