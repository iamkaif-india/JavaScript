// let firstPromise =new Promise((resolve, reject) => {
//     setInterval(() => {
//         console.log("Hello World");
//     }, 1000);
// });

let succes = false;

let newPromise2 = new Promise((resolve, reject) => {

    if (succes == true) {
        resolve("okay bhai, sab sahi hai") // resolve is called when the promise is resolved
    } else {
        reject("ohh god, Not okay") // reject is called when the promise is rejected
    }
});

newPromise2.then((message) => { // then is called when the promise is resolved, if the promise is rejected then catch is called. you can have multiple then and catch

    console.log(`Message: ${message}`)

}).catch((message) => { // catch is called when the promise is rejected, if the promise is resolved then then is called

    console.log(`Error: ${message}`)

}).finally((m)=> {
    console.log("finally, ab tum true karo ya false mere ko matlab nahi mai to chalunga!")
})




