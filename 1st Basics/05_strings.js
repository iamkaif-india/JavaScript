// ***************** CONCATINATION OF STRINGS ************************ //

let firstName = "Mohammad";
let lastName = "Kaif";
let age = 19;

// let fullName = firstName + " " + lastName; // this is outdated way of doing it //

// modern way to do it is this //

let fullName = `Hello, I am ${firstName} ${lastName} and I like coding in vscode. I am ${age} years old.`;
console.log(fullName);
console.log(fullName.toUpperCase());

// let gameName = new String("PUBG"); // this is object way of creating string //
let gameName = "PUBG"; // this is primitive way of creating string //

console.log(gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName.length);
console.table(gameName.indexOf("P")); // it will tell the index of this latter in the string //
console.log(gameName.charAt(position = 3)); // it will tell the latter at this position in the string //
console.log(gameName.charAt(2)); // it will tell the latter at this position in the string //
console.table([gameName.charAt(0), gameName.charAt(1), gameName.charAt(2), gameName.charAt(3)]); // it will tell the latter at this position in the string //
// indexOf() is used to find the index of a particular character in a string and chartAt () is used to find the character at a particular index in a string. //

// some other functions in strings //

let userName = "Mohammad Kaif";
// console.log(userName.substring(0, 8)); // it will print the string from 0 to 8 index //
// console.log(userName.substring(9)); // it will print the string from 9 to end //
console.log(userName.length);
console.table([userName.charAt(0), userName.charAt(1), userName.charAt(3), userName.charAt(4), userName.charAt(5), userName.charAt(6), userName.charAt(7), userName.charAt(8), userName.charAt(9), userName.charAt(10), userName.charAt(11), userName.charAt(12)]);

// includes() checks if a string contains a specified value
console.log(userName.includes("Kaif")); // true

// startsWith() checks if a string starts with a specified value
console.log(userName.startsWith("Mohammad")); // true

// endsWith() checks if a string ends with a specified value
console.log(userName.endsWith("Kaif")); // true

// replace() replaces a specified value with another value in a string
let newUserName = userName.replace("Kaif", "Ali");
console.log(newUserName); // Mohammad Ali

// repeat() returns a new string with a specified number of copies of an existing string
let repeatedString = userName.repeat(2);
console.log(repeatedString); // Mohammad KaifMohammad Kaif

// split() splits a string into an array of substrings
let nameArray = userName.split(" ");
console.log(nameArray); // ["Mohammad", "Kaif"]

// toLowerCase() converts a string to lowercase letters
console.log(userName.toLowerCase()); // mohammad kaif

// toUpperCase() converts a string to uppercase letters
console.log(userName.toUpperCase()); // MOHAMMAD KAIF

// NOTE: substring() is used to print the string from a particular index to another index. last index is not included in the output. //

// console.log(userName.slice(9, 13)); // it will print the string from 9 to 13 index //

// trim() is used to remove the extra spaces from the start and end of the string //
let userName2 = "    Mohammad Kaif    ";
console.log(userName2); // it will print the string with extra spaces //
console.log(userName2.trim()); // it will print the string without extra spaces //

