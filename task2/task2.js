var textBoxValue = "Enter your input here";
document.querySelector('#text-box').value = textBoxValue;
console.log(textBoxValue);

function textInput() {
    textBoxValue = document.querySelector('#text-box').value;
    console.log(textBoxValue)
}