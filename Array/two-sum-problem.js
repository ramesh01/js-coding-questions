// Problem - Leetcode - Easy
// Topics - Array, HashTable
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (map.has(complement)) {
			return [complement, nums[i]];
		}
		map.set(nums[i], i);
	}
	return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); //[2,7] 
// Time complexity O(n)


// Method - 2

function twoSum(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] == target) {
				return [i, j];
			}
		}
	}
	return [];
}

console.log(twoSum([2, 7, 11, 15], 26)); // return indices 
// Time complexity O(n^2)
