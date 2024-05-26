//getelementbyId

const title = document.getElementById('main-heading');
console.log(title);


//getelementbyclassname()

const listItems = document.getElementsByClassName("list-items");
console.log(listItems);

//getelementbytagname()

const listTag = document.getElementsByTagName("li");
console.log(listTag);

//queryselector it returns the first item which matches with the selector i.e, "div" in below eg

const container = document.querySelector("div");
console.log(container);

//queryselectorall() it returns all the items which matches with the selector.

const containers = document.querySelectorAll("div");
console.log(containers);



