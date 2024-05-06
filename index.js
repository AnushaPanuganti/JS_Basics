
//primitive/value types
let name = 'Anu'; //string literal
let age = 26; //Number Literal
let isApproved = false; //boolean literal
let firstName = undefined;   //if nothing is assigned bydefault returns undefined only
let lastName = null;       //we use null to clear the value of the variable

//reference types
//1.object
let person = {
    name: 'Anu',
    age: 26,
};

//dot notation
person.name = 'Anusha';

//bracket notation
person['name'] = 'Annu';

console.log(person.name);

//2.array
let selectedColors = ['red','blue']
selectedColors[2] = 'white'
selectedColors[3] = 3
console.log(selectedColors.length)

//3.Function

//performing a task
function greet(name) {
    console.log("Hello " + name);
}

greet('John');
greet('Anush');

//calculating a value
function square(num) {
    return num * num;
}

console.log(square(5));   //here we have 2 function calls one is console.log and other is square function
