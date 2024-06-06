const division = document.querySelector('.container');
const inputText = document.querySelector('#text-box');
const paragraph = document.createElement('p');
division.append(paragraph);
paragraph.setAttribute("id", "para")

function textDisplay() {
    var inputText = document.querySelector('#text-box').value;
    document.querySelector("#para").innerHTML = inputText;
}