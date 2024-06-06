function checkAge(number) {
    const age = document.querySelector('#text-box').value;
    if (age < 18) {
        alert("You are not authorised to register");
        return false;
    }else window.location = "http://127.0.0.1:5500/task5/login.html";

}

// function validation() {
//     if (checkAge(number) == true) {
//         window.location = "login.html";
//     }
//     return false;
// }