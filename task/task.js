const division = document.querySelector('.container');
const inputText = document.querySelector('#text-box');
const paragraph = document.createElement('p');
//paragraph.innerText = "Bangalore";
//let text = "Bangalore"
//paragraph.setAttribute('value','Para');
division.append(paragraph);

function textDisplay(text) {
    inputText.value = text;
    for (let i  of text){
        paragraph.setAttribute("value", i);
        paragraph.innerText += i;
        console.log(paragraph,i);
    }
    //if (inputText.value) {
    //    paragraph.setAttribute("value", inputText.value)

        
    //}
    
    //paragraph.innerText = text;
    //inputText.value = text;
};


textDisplay("Bangalore");
