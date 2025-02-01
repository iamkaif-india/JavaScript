let myObject = {
    userName: "Mohammad Kaif",
    age: 19,
    welcomeMessage: function (){
        console.log(`${this.userName} Welcome to our website!`);
    }, // here this refers to current object
    exit: function () {
        console.log(`Thank you ${this.userName} for visiting out website!`)
    },
};

myObject.welcomeMessage(); // here how to call the function
myObject.exit();

let googleUser = {
    firstName: "Mohammad",
    lastName: "Kaif",
    age: 19,
    password: "X0019*********",
    fullName: function(){
        console.log(`Name: ${this.firstName} ${this.lastName}`);
    },
    knowPassword: function(){
        console.log(`Password: ${this.password}`);
    }
};

googleUser.fullName();
googleUser.knowPassword();


// Arrow Function //
// basic arrow function syntax, () => {}

let msUser = () => {
    msUserName = "Saini";
    console.log(`Hallo, ${msUserName}!`)
}; // In arrow function you can not user "this" keyword; if you use output will be undefined

msUser();

let msUser2 = () => {
    console.log(`Hallo, ${msUserName}!`)
};

msUser2();

let addNumbers = (num1, num2) => num1 + num2; // these are called implicit return and when you use return keyword it is called explicit return
// or let addNumbers = (num1, num2) => (num1 + num2); // if you use curly braces you have to use return keyword.
console.log(addNumbers(78, 90));








