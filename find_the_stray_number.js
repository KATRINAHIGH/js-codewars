/*You are given an odd-length array of integers, in which all of them are the same, 
except for one single number. Implement the method stray which accepts such array, 
and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples:
[1, 1, 2] => 2
[17, 17, 3, 17, 17, 17, 17] => 3*/


/*Returning a string. When cast a value to a key it is converted to a string.*/
function stray(numbers) {
	var dict = {};
  
  for(i = 0; i < numbers.length; i++){
	  var num = numbers[i];

		if(dict[num] === undefined){
			dict[num] = 1;
		}else{
			dict[num]++;
		}
	}
	
	for(key in dict){
		if(dict[key] === 1){
			return parseInt(key);
		}
	}	
  return 0;
}