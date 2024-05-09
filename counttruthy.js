const array = [5,null,undefined,'',6,8];    //o/p=3
console.log(countTruthy(array));

//Falsy
//undefined
//null
//0
//''
//false
//NaN

function countTruthy(array) {
    let count = 0;
    for (let val of array)
        if (val)               //if value is true then count is incremented,if falsy value then it is not incremented
        count++;
        return count;
    }
    
    //for-of loop is used to iterate over the items/elements of the object

    //we can write the conditions like
    //if (val !== false || val !== undefined || val !== 0 || val !== null || val !== NaN || val !== '')