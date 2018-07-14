/*Check to see if a number in an array is a prime number.
Return only Prime numbers
Prime numbers are divisible by itself and 1. */

var randomNum = [1, 2, 3, 4, 5, 7, 9, 11, 12, 13, 14,17, 19];
let primeNum = randomNum.filter((value) => {
	for(var i = 2; Math.floor(Math.sqrt(value)); i++) {
        if(value % i !== 0 && value > 1) {
            return true;
        }else{
            return false;
        }
    }
});

console.log(randomNum.primeNum());

/*The for loop accepts a number from the randomNum array.
The start variable is at 2 and increments by one until 
it stops at the square root of the value. 
through each execution of the if i is passed through and 
divided into the number being evaulated. If that number has
a modulus of 0 then it is evenly divided by a number other
than itself and is not a prime. also checks number isn't negative.
Use .filter() to create a new array of primes which are nums that 
evaluate to true.
You can stop after Math.floor(Math.sqrt(value)), because each 
divisor of value greater than Math.sqrt(value) matches another 
divisor of value that is less than Math.sqrt(value). 
Example: in isPrime(30), you’ll never check 30 % 15 === 0 
because 30 % 2 === 0 comes first and then the loop stops.
