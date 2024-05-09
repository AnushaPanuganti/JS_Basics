console.log(sum(10));
//Multiples of 3: 3,6,9
//multiples of 5: 5,10
//o/p = 33

function sum(limit) {
    let add = 0;
    for (let i=0; i <= limit; i++){
        if ((i % 3 == 0) || (i % 5 == 0)){
            add += i;
        }
    }
    return add;
}
