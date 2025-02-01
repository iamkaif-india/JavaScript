//++++++++++++++ Aray part 2 +++++++++++++++ //
// marging two arrays //

const firstArray = ["Mohammad", "Maqtoom", "Ali"];
const secondArray = ["Sabista", "Arsha", "Arbina"];


let badFinalArray = firstArray + secondArray;
console.log(badFinalArray); // here the output will be a string not an array //

let badFinalArray2 = firstArray.join(secondArray);
console.log(badFinalArray2);

// concat() operator is used to merge two arrays //
let finalArray = firstArray.concat(secondArray);
console.log(finalArray);

// spread operator is used to merge two arrays //
let finalArray2 = [...firstArray, ...secondArray]; // this is the modern way of merging two arrays, becouse this can merge many arrays at a time //
console.log(finalArray2);

// arrey in another array, this is called nested array //
let nestedArray = [[1, 2, 3, 4], 6, 8, 9, [10, 11, 12, [13, 14, 15, [89]]]];
// we can access the elements of nested array by using multiple square brackets //
// making nested array to a single array //
let singleArray = nestedArray.flat(3); // here 3 is the depth of the nested array, we can use infinity to make it a single array //
console.log(singleArray);

console.log(Array.isArray("Mohammad")); // asking if this is an array or not //

// making a array from a string //
console.log(Array.from("Mohammad")); // it will make an array of all the characters of the string //
// OR //
let stringArray = Array.from("Mohammad");
console.log(stringArray);

// making a array from many veriables //
let name = "Mohammad";
let name2 = "Maqtoom"; // 
let name3 = "Ali";
let name4 = "Sabista";

let nameArray2 = Array.of(name, name2, name3, name4);
console.log(nameArray2);
