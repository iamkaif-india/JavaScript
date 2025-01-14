let newObject = {
    "js": "Javascript",
    "java": "Java",
    "c++": "C++",
    "py": "Python",
    "php": "PHP",
};

for (let key in newObject) {
    // console.log(`We use "${key}" shortcut for "${newObject[key]}"`);
}; // we can use loops in objects but output will be single value for multiple values we have to use `` for printing multiple values //

// output //
// We use "js" shortcut for "Javascript"
// We use "java" shortcut for "Java"
// We use "c++" shortcut for "C++"
// We use "py" shortcut for "Python"
// We use "php" shortcut for "PHP"

let newArray = ["js", "java", "c++", "py", "php"];

for (const key of newArray) {
    //console.log(key);
}; // output: js, java, c++, py, php //

for (let key in newArray) {
    // console.log(key);
}; // output: 0, 1, 2, 3, 4 //

// this is the only major difference between the above two loops, the difference is that the "of" loop is used for arrays, while the "in" loop is used for objects. if you use "in" loop the key  will be index of the array, and if you use "of" loop the key will be the value of the array. //

for (let key in newObject) {
    console.log(newObject[key]);
}; // output: Javascript, Java, C++, Python, PHP //

// note:

// call back function //

