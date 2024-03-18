// Problem - Leetcode - Easy
// Topics - Array, HashTable
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

function findDifference(nums1, nums2) {
	const diff1 = nums1.filter((number) => !nums2.includes(number));
	const diff2 = nums2.filter((number) => !nums1.includes(number));
	return [[...new Set(diff1)], [...new Set(diff2)]];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));

// Method 2
function findDifference(nums1, nums2) {
	const set1 = new Set(nums1),
		set2 = new Set(nums2);
	const result = [[], []];
	for (n of set1) {
		if (!set2.has(n)) {
			result[0].push(n);
		}
	}

	for (n of set2) {
		if (!set1.has(n)) {
			result[1].push(n);
		}
	}
	return result;
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));
