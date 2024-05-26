//DOM Manipulation
//event listeners

//syntax
//element.addEventListener("Click",function);

const buttonTwo = document.querySelector('.btn-2');
function alertBtn() {
    alert('I also love JavaScript');
}

buttonTwo.addEventListener("click",alertBtn);

//mouseover

const newBgColor = document.querySelector('.box-3');
function changeBgColor() {
    newBgColor.style.backgroundColor = 'blue';
}

newBgColor.addEventListener("mouseover",changeBgColor);
