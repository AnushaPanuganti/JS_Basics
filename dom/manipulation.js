//DOM Manipulation

// const title = document.querySelector('#main-heading');      //# represnts all elements of that id the style will be affected
// title.style.color = 'red';
// console.log(title);

//inline styling to elements

// const listItems = document.querySelectorAll('.list-items');    //. represents all elements of that classname will be affected

// for ( i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '1rem';

// }
// console.log(listItems);


//styling--creating elements in the list <ul>
const ul = document.querySelector('ul');
const li = document.createElement('li');

//adding elements..adding element li to the ul
ul.append(li)

//modifying the text
li.innerText = 'X-men';

//modifying attributes 
li.setAttribute('style','color: blue');    //sets X-men attribute to id=main heading..inthis case sets the style to blue colour
// u  can give ('class' , 'democlass') as well


// const firstListItem = document.querySelector('.list-items');
// innertext gives the plain text in one line
//textcontent gives the text as it is in the html page
// innerhtml gives exactly the same as in html along with tag
// console.log(firstListItem.innerText);       
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.removeAttribute('style');

//get attribute---gives the attribute of the selector
const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));  

//modifying classes
li.classList.add('list-items')    //adds class to the list item i.e, x-men
li.classList.remove('list-items')
console.log(li.classList.contains('list-items'));   //returns false as we have removed list-items on class

//remote elements
li.remove();    //removes x-men









