function checkAge(number) {
    const age = document.querySelector('#text-box').value;
    if (age < 18) {
        alert("You are not authorised to register");
        return false;
    }

}