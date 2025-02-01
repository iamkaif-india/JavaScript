let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userName = document.querySelector("#name").value.trim(); // this suppose to be a string //
    let userAge = parseInt(document.querySelector("#age").value);

    if (userName == " ") {
        document.querySelector("#result").innerHTML = `please write your Name`
        console.log("userName = active")
    }
    if (isNaN(userAge) || userAge <= 0) {
        document.querySelector("#result").innerHTML = `${userAge} is not a valid Age, please write your Age`
        console.log("userAge = active")
    }
    else {
        document.querySelector("#result").innerHTML = `Hello ${userName}, Your Age is ${userAge}`;
    }
})
    

