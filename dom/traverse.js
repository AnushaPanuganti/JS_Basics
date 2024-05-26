//traversing upwards..i.e, child to parent
let ul = document.querySelector('ul');
console.log(ul.parentNode);      //gives parent of ul i.e, div
console.log(ul.parentElement);
console.log(ul.parentNode.parentNode);   //gives grandparent of ul i.e, body
console.log(ul.parentElement.parentElement);

//traversing downwards in DOM;
//in this nodes also count indendation i.e, spaces as text nodes...so it returns 11 nodes as it includes the text nodes i.e, spaces
//whereas elements only return the correct ones without including spaces
 console.log(ul.childNodes)
 console.log(ul.firstChild)               //returns text as first node is space
 console.log(ul.lastChild)
 //ul.childNodes[1].style.backgroundColor = 'blue';     //sets the bg color of childnode indexed 1 to blue
 //ul.firstChild.style.backgroundColor = 'blue';       this throws an error as it is a text node i.e, space and we cannot set colour to it

 //now using elements
console.log(ul.children);       //gives 5 elements
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

//sibling node traversal....siblings dont have to be of same type    eg of sibling nodes ul,h1
const div = document.querySelector('div');
console.log(div.childNodes);
console.log(ul.previousSibling);       //returns text as we have indendation
console.log(ul.nextSibling);           //returns text as we have indendation

//using elements
console.log(ul.previousElementSibling);     //returns h1 element
console.log(ul.nextElementSibling);          //returns null as we dont have next sibling for ul

