showPrimes(20);

function showPrimes(limit)  {
    for (let number=2;number<=limit;number++)
        if (isPrime(limit)) console.log(i);
}


function isPrime(number) {
    for (let factor=2;factor<number;factor++)         //j is checking factors i.e,the the numbers whose factors are other than 1 and the number itself
        if (number % factor === 0)
            return false; 
    return true;   
}   