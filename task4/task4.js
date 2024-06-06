const div = document.querySelector('.container');
var p1 = document.createElement('p')
p1.innerHTML = "You are not authorised to register"
function checkAge(number) {
    const age = document.querySelector('#text-box').value;
       if (age < 18) {
        div.append(p1);
        return false;
    }else window.location = "http://127.0.0.1:5500/task4/login.html";

}