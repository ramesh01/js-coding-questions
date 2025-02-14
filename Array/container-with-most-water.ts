// Problem - Leetcode - Medium
// Topics - Arrays
// Approach - Two pointers
// Q.11 You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while(left < right) {
        
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let area = width * minHeight;

        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left ++
        } else {
            right --
        }

    }
    return maxArea
};