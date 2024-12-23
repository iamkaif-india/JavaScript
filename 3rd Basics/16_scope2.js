// NESTED FUNCTION //

function outer(){
    let userName = "Mohammad Kaif";
    function inner(){
        let age = 19;
        console.log(`Hello ${userName} your age is ${age}`);
    };
    // console.log(age);
    inner();
};
outer();

if(true){
    let a = 10;
    if(a===10){
        let b = 20;
        console.log(b*a);
    };
    // console.log(b);
    console.log(a);
}

// FUNCTION DECLARATION //

// FUNCTION EXPRESSION //

let addOne = function(number){
    return number + 1;
};

console.log(addOne(4)); // this will be not accessible when we call from before the function declaration


console.log(addTwo(4)); // this is still accessible outside the function

function addTwo(number2){
    return number2 + 2;
};

