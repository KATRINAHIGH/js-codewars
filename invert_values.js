/*Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers.*/

function invert(array) {
	var invertedList = [];
	for( i = 0; i < array.length; i++){
		if(array[i] === 0){
			invertedList.push(array[i]);
		}else{
			invertedList.push(array[i] * -1);
		}
    }
	return invertedList;
}


var test1 = [1,2,3,4,5];
var test2 = [1,-2,3,-4,5];
var test3 = [];
console.log(invert(test1));
console.log(invert(test2));
console.log(invert(test3));