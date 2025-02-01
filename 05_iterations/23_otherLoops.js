// *********************** other loops *********************** //

// for of loop //
/*

let myArray = ["Mohammad", "Maqtoom", "Ali", "Arsha", "Arbina"];

for (let name of myArray) {
    console.log(name);
}; // this is basic syntex of for of loop //

let myObject = {
    name: "Mohammad",
    age: 19,
    height: "5ft 9inch",
};

for (let key in myObject){
    console.table(myObject[key]);
};

// Map //
let myMap = new Map();

myMap.set("name", "Mohammad Kaif");
myMap.set("age", 19);
myMap.set("height", "5ft 9inch");

console.log(myMap);
console.log(myMap.get("name"));

// Note => map always remembers the insertion order of keys, you can't entry any key twice.

// using loops in map //

for (let key of myMap){
    // console.log(key);
}; // this is basic syntex of for of loop in map //

for (let [key, value] of myMap){ // using destructuring in map, you have to use bracket notation for seperate  keys and values //
    console.log(`${key} :- ${value}`);
};

*/

// for of loop on object //

let myObject2 = {
    name: "Mohammad",
    emaiId: "iamkaif.india@gmail.com",
    mobileNo: 9661949280,
    password: "12345678",
};

// console.log(myObject2);

for (let key in myObject2){ // you can only use single variable //
    console.log(myObject2[key]);
};










