// Problem - Leetcode - Easy
// Topics - Array, Hash Table, Sorting
// You are given a 0-indexed array of integers nums.
// A prefix nums[0..i] is sequential if, for all 1 <= j <= i, nums[j] = nums[j - 1] + 1. In particular, the prefix consisting only of nums[0] is sequential.
// Return the smallest integer x missing from nums such that x is greater than or equal to the sum of the longest sequential prefix.

function smallestMissingInteger(nums) {
	let numSet = new Set(nums);
	let ans = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1] + 1) {
			break;
		}
		ans += nums[i];
	}

	while (numSet.has(ans)) {
		ans++;
	}
	return ans;
}

const inputArray = [3, 4, 5, 1, 12, 14, 13];
const result = smallestMissingInteger(inputArray);
console.log(result); // Output: 15
