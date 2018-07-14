/*Write the function sumInput() that:

    Asks the user for values using prompt and stores the values in the array.
    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    Calculates and returns the sum of array items.

P.S. A zero 0 is a valid number, please don’t stop the input on zero.*/
/*sums and array
var numbers = [65, 44, 12, 4];

 let total = numbers.reduce( (total, value) => {
	 return total + value;
 });

 document.write(total);*/
 
 
function sumInput() {

  let numbers = [];
  while (true) {
    let value = prompt("A number please?", 0);
    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }

  /*same as below but below is shorter
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;*/
  return numbers.reduce(function(acc, val){
    return acc + val;
  })
}

alert( sumInput() );

/*We don’t convert value to number instantly after prompt, 
because after value = +value we would not be able to tell 
an empty string (stop sign) from the zero (valid number). 
We do it later instead.*/
