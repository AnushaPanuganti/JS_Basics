showNumbers([1,3,4,5,6]);

function showNumbers(limit) {
    for (let i in limit) {
        //const type = (i % 2 == 0) ? 'even' : 'odd';
        console.log(i,limit[i]);
    }
}


//to show difference in for-in loop and for loop
shownumoddeven(15);
function shownumoddeven(limit) {
    for (let i = 0;i < limit;i++) {
        const type = (i % 2 == 0) ? 'even' : 'odd';
        console.log(i,type);
    }
}
