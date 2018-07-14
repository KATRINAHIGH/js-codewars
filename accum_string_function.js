/**The examples below show you how to write function accum:
The parameter of accum is a string which includes only letters from a..z and A..Z.
Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"*/

function accum(s) {
	var newString = "";
	for( i = 0; i < s.length; i++){
		newString += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + "-";
		}
	return newString.substring(0, newString.length-1);
}

var result = accum("abcd");