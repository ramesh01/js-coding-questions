// Problem - Leetcode - Easy
// Topics - Array, Two Pointers
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

function removeElement(nums, val) {
    let i = 0; // Pointer for writing to the array

    // Iterate through the array
    for (let j = 0; j < nums.length; j++) {
        // If the current element is not equal to the target value
        // Write it to the position pointed by i
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++; // Move the write pointer forward
        }
    }

    return i; // i represents the new length of the array without the target value
}

console.log(removeElement([3,2,2,3], 3)); // 2
