// Problem - Leetcode - Medium
// Topics - Array, Two Pointers, Binary Search, Bit Manipulation
// link - https://leetcode.com/problems/find-the-duplicate-number/description/

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

function findDuplicate(nums) {
	nums.sort((a, b) => a - b);

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			return nums[i];
		}
	}
	return -1;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
