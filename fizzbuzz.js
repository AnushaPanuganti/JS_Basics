//divisible by 3 => Fizz
//divisible by 5 => Buzz
//divisible by 3 & 5 => FizzBuzz
//not divisible by 3 or 5 => input
//not a number => 'Not a number'

const output = fizzBuzz(22);
console.log(output);

function fizzBuzz(input) {
    if (typeof(input) !== 'number') return NaN;   //NaN means not a number  //weirdly typeof(NaN) is 'number'
    if ((input % 3 == 0) && (input % 5 == 0)) return 'FizzBuzz';
    if (input % 3 == 0) return 'Fizz';
    if (input % 5 == 0) return 'Buzz';
    return input;
}