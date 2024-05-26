//event delegation

document.querySelector('#sports').addEventListener('click',function(e) {
    console.log(e.target.getAttribute('id') + " is clicked");
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = "lightgrey";
    }
})

//now we are adding list element----the above event will work for this as well..so the event works dynamically
const sports = document.querySelector('#sports');
const newSport = document.createElement('li')

newSport.innerText = 'Cricket';
newSport.setAttribute('id','Cricket');

sports.appendChild(newSport);
