// Problem - Leetcode - Easy
// Topics - Array, Binary search
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found at index mid
        } else if (nums[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    // If the target is not found, left will be the insertion position
    return left;
}

// Example usage:
const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target)); // Output: 2