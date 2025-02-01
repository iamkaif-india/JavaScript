// // async await //

// // async function getData() {
// //     setTimeout(() => {
// //         console.log(`i am in the setTimeout block`)
// //     }, 3000)
// // }
// // getData() // fuction call


// // FETCH //

// async function getData2() {
//     let responce = await fetch ("https://api.github.com/users/iamkaif-india")
//     // parce json -> async
//     let data = await responce.json();
//     console.log(data);
// }

// getData2()


// CODE WITH HARRY //

let p = fetch("https://api.github.com/users/iamkaif-india");
p.then(function(responce){
    console.table([responce.status, responce.ok])
    return responce.json()
}).then((message) => {
    console.table([message.login, message.id, message.name])
});

console.log(p)