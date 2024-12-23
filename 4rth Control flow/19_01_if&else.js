// if and else //

let score = 100;

if (score == 100){
    let passStatus = "correct";
    console.log(`Hello, your score is ${score} and you are ${passStatus}`);
}
else {
    console.log(`Hello, your score is ${score} and you are failed`)
}


// if and else if and else //

let bankBalance = 5080;

if (bankBalance < 3000) {
    console.log(`Your balane is low, total balance: ${bankBalance}`);
} else if (bankBalance < 4000){
    console.log(`Your balance is okay, total balance: ${bankBalance}`);
} else if (bankBalance > 5000) {
    console.log(`Your balance is ${bankBalance}, You are rich bro`);
} else {
    console.log("bhai tere se nahi hoga")
};

// multiple conditions //

let loginStatus = false;
let accountStatus = "active";
let userAge = 19;
let userName = "Mohammad Maqtoom";

if (loginStatus && accountStatus == "active" && userAge >= 18){
    console.log(`Hello! ${userName} you are eligible for driving license`); // if all the conditions are true then it will print this
} else {
    console.log(`Sorry! ${userName} you are not eligible for driving license`)
}

let userLoggedInFromGoogle = true;
let userLoggedInFromFacebook = false;
let userLoggedInFromTwitter = true;

if (userLoggedInFromGoogle || userLoggedInFromFacebook || userLoggedInFromTwitter){
    console.log("User is logged in"); // if any of the condition is true then it will print this
} else {
    console.log("User is not logged in");
}

