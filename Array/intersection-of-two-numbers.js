// Problem - Leetcode - Easy
// Topics - Array, HashTable, Two Pointers, Binary Search, Sorting
//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

function intersection(nums1, nums2) {
	const set1 = new Set(nums1),
		set2 = new Set(nums2);
	const result = [];
	for (const n of set2) {
		if (set1.has(n)) {
			result.push(n);
		}
	}
	return result;
}

console.log(findDifference([1, 2, 2, 1], [2, 2]));
