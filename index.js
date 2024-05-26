let word1 = "Anusha";
let word2 = "Panuganti";
let example = `${word1} 
${word2}`
;
//console.log(sample);
document.getElementById('example').innerText = example;

//destructure an arry
let [firstname, middlename, lastname] = ["Bhanu","Chandra","Prasad"];
lastname = "Prakash";
console.log(lastname);

//destructuring objects
const personalInfo = {
    first : 'Anu',
    last : 'Sweety',
};
const {first: fn, last: ln} = personalInfo;
console.log(`${fn} ${ln}`);

//object literal
//function addressMaker(city, state) {
//    const newAdress = {city, state};
//    console.log(newAdress);
//}

//addressMaker('Austin','Texas');

//chaallenge
function address(adress) {
    const {city, state} = adress;
    const newAd = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAd.city},${newAd.state},${newAd.country}`);
}

address({city:"Austin",state:"Texas"});

//spread operator
let exmple1 = [1,2,3,4,5,6];
let exmple2 = [...exmple1];
exmple2.push(true);
console.log(exmple2)


