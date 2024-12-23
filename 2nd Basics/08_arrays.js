// ++++++++++ ARRAYS IN JAVASCRIPT ++++++++++ // Arrays are used to store multiple values in a single variable.

// basic of arrays //

let friends = ["Mohammad", "Sabista", "Sahnawaaz", "Saliq", "Maqtoom"];
console.log(friends);
console.log(friends[4]);
console.log(friends.length);

// methods in arrays //

friends.push("Arbina"); // it will add the element at the end of the array //
friends.pop(); // it will remove the element from the end of the array //
friends.unshift("Arbina"); // it will add the element at the start of the array //
friends.shift(); // it will remove the element from the start of the array //

// questioning in arrays //

console.log(friends.includes("Saliq")); // it will return true if the element is present in the array //
console.log(friends.indexOf("Sahnawaaz")); // it will return the index of the element in the array, if the element is not present in the array then it will return -1 //

// other methods in arrays //

console.log(friends.reverse()); // it will reverse the array //
console.log(friends.join(" Arbina ")); // it will join the elements of the array with the specified string,this array will be converted into a string //

// splice and slice methods in arrays //

console.log("A " + friends); // this is the original array //
console.log(friends.slice(1, 3)); // it will print the elements from 1 to 4 index, it will not make changes in the original array, it incleudes the first index and excludes the last index //
console.log(friends.splice(1, 3)); // it will remove the elements from 1 to 4 index, it makes changes in the original array, it includes the first index and also includes the last index //














