//arithmetic operators
let x=10;
let y=3;
console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(x%y);
console.log(x**y);

//increment (++)
//console.log(++x)     //first increments x by 1 and gives result i.e, shows 11
console.log(x++);      //first executes x value then for next log function performs increment..so shows 10,then for next log function shows 11
console.log(x);

//decrement (--)
console.log(y--);
console.log(y);


//equality operators
//1.strict equality (type + value)  both type and value of rhs,lhs should be same else returns false
console.log(1 === 1);   //returns true
console.log('1' === 1);  //returns false

//2.lose equality (value) doesnt care about type matching,if types dont match then type of RHS is converted to type og lHS)
console.log(1 == 1);     //returns true
console.log('1' == 1);    //true
console.log(true == 1);   //true

//ternary or conditional operators
//if a customer has more than 100 points then 'gold' cusotmer,else silver
let points = 110;
let type = points > 100 ? 'gold' : 'silver' ;       //points>100 returns boolean value thats true or false,if true then gold,if false then silver

console.log(type);

//logical operators
//logical AND (&&) both true then true
//logical OR(||) anyone true then true
//NOT (!) returns opposite


//logical operators with non booleans
//false || 'Anusha'   o/p is Anusha       anything thats not falsy is truthy.

//falsy values in JS
//undefined,null,0,false,'',NaN      for all these values it is considered as False when used in operations

//shortcircuiting
//false || 1 || 2     o/p is 1,as soon as it finds the truth value the evaluation stops no matter if anything is there beyond

let userColor = undefined;
let defaultColor = 'Blue';
console.log(userColor || defaultColor);     //this gives o/p as Blue,since undefined is false value

//bitwise operator  OR(|),AND(&)
//read= 00000100 write= 00000010 execute= 00000001, for rw= 00000110,for rwx = 00000111
const readPermission = 4;
const writePermission = 2;
const exePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission ;    //this will return 0+4+2=6  
console.log(myPermission);                     //with bitwise OR operator we can add permissions
let message = myPermission & readPermission ? 'yes' : 'no';  //with bitwise OR operator we can check to see what permissions we have
//in this the output will be yes if we have readpermisson
console.log(message)  //this will return yes
let mess = myPermission & exePermission ? 'yes' : 'no'; //with Bitwise AND operator we can check to see if we have given permissions.
console.log(mess)  //this will give o/p no since expermission not there in mypermission









