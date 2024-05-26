let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"If you want to live a happy life,
    tie it to a goal,not to people or things."`,
    person:`Albert Einstein`
},{
   quote: `"Your time is limited,so dont waste it living 
   someone else's life."` ,
   person: `Steve Jobs`
},{
    quote: `"Tell me and I forget.Teach me,I remember.
    Involve me,I learn."`,
    person: `Benjamin Franklin`
},{
    quote: `"It doesnt matter how slowly you go as long as
    you do not stop."`,
    person: `Confucius`
},{
    quote: `"Our lives begin to end the day we become silent
    about the things that matter"`,
    person: `Martin Luther King`
},
];

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random() * quotes.length)    //math.random * quotelength generates a number b/w 0 and quotes array length
    //since it does not return a whole number,we are flooring,to nearest integer
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})