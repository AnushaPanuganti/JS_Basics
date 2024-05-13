showPrimes(20);

function showPrimes(limit)  {
    for (let i=2;i<=limit;i++){      //i is iterating through number
        let isPrime = true;
        for (let j=2;j<i;j++){           //j is checking factors i.e,the the numbers whose factors are other than 1 and the number itself
            if (i % j === 0)
                isPrime = false;
                break;
        }
        if (isPrime) console.log(i);
        }
    }
