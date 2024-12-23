// ************** IMIDIATE INVOKED FUNCTION EXPRESSION ************** //
// IIFE is a function that runs as soon as it is defined, we use it to avoid polluting the global scope //

(function sayHello(){
    console.log("Hello World");
})(); // function is defined under the parenthesis and then we can call it without any function name


(() => {
    console.log("hello world two")
})(); // we can also use arrow function here for IIFE //

// we can pass here veriables //

((myName)=> {
    console.log(`I am ${myName}`)
})("Mohammad Kaif"); // we can also pass arguments here