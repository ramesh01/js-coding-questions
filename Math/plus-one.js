// Problem - Leetcode - Easy
// Topics - Array, Math
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] < 9) {
			digits[i] += 1;
			return digits;
		} else {
			digits[i] = 0;
		}
	}
	digits.unshift(1);
	return digits;
}

console.log(plusOne([9])); //[1,0]
console.log(plusOne([1, 0])); //[1,1]
console.log(plusOne([1, 2, 4])); //[1,2,5]
console.log(plusOne([1, 9, 9])); //[2,0,0]