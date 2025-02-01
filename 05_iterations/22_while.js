// ++++++++++++ while loop +++++++++++++//

let index = 0;
while (index <= 7) {
    console.log(`The value of Index: ${index}`);
    index = index + 1;
}; // here index++ is also valid //

// while loop is used to execute a block of code repeatedly until a certain condition is met.

let myArray = ["Mohammad kaif", "Arsha", "Arbina", "Aquib"];

let i = 0;
while (i < myArray.length) {
    console.log(`The value of Index: ${myArray[i]}`);
    i = i + 1;
}; // while loops is very similar to for loops. //

// ++++++++++++ do while loop ++++++++++++ //

let score = 0;

do {
    console.log(`Your score is ${score}`);
    score ++;
} while (score <= 10); // do while loop will execute the block of code at least once even if the condition is false. //
