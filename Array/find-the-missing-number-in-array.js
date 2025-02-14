// Given an array containing numbers from 1 to N, with one number missing, find the missing number.

function missingNumberInAnArray(arr) {
	const N = arr.length + 1;
	const expectedSum = (N * (N + 1)) / 2; // sum of the first N natural numbers.

	const actualSum = arr.reduce((acc, next) => acc + next, 0);
	const missingNumber = expectedSum - actualSum;

	return missingNumber;
}

console.log(missingNumberInAnArray([5, 2, 3, 1]));
