// for loop //

for (let i = 0; i <= 10; i++) {
    //console.log(i);
};

for (let i = 1; i <= 1000; i++){
    let result = i;
    for (let j = 1; j <= 10; j++){
        console.log(`${result} x ${j} = ${result * j}`);
    }
}; // nested loop

// LOOP ON ARRAY //

let myArray = ["Mohammad", "Maqtoom", "Ali", "Arsha", "Arbina"];
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
};

// if else loop //

for (let i = 1; i <= 24; i++){

    if (i === 5){
        for (let j = 10; j > 0; j--){
            console.log(`Reverse number: ${j}`);
        };
    };
    console.log(i);
}

// break and continue //

for (let i = 0; i <= 15; i ++) {

    if (i === 5){
        console.log(`${i} : Detected`);
        break;
    }
    console.log(i);
}; // break //


for (let i = 0; i <= 15; i ++) {

    if (i === 5){
        console.log(`${i} : Detected`);
        continue;
    } else if (i === 10){
        console.log(`${i} : Detected`);
        continue; // here it will skip 10, and print value of else if [10 : detected]
    }
    console.log(i);
}; // continue // 




