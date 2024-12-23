// +++++++++++++++++++++ SCOPES +++++++++++++++++++++ //
// Scopes are used to determine the visibility of variables. // 
// There are two types of scopes in JavaScript: Global scope and Local scope. //
// Global scope is the scope of the entire script, and Local scope is the scope of a function. //

let a = 10; // Global scope

if (true) {
    let a = 300;
    console.log(a); // 300
}; // Here, the variable 'a' is declared inside the if block, so it has a local scope and can only be accessed inside the if block.

console.log(a); // 10

function myFunction() {
    let a = 300;
    console.log(a); // 300
};  // Here, the variable 'a' is declared inside the function, so it has a local scope and can only be accessed inside the function.

myFunction();