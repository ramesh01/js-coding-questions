// Problem - leetcode - Medium
// Topics - String, Dynamic Programming
// Given a string s, return the longest palindromic substring in s.

function longestPalindrome(s) {
	let start = 0;
	let maxLength = 0;

	// Iterate through the string, starting from each character
	for (let i = 0; i < s.length; i++) {
		// Check for palindromes centered on a single character
		expandAroundCenter(s, i, i);

		// Check for palindromes centered on two characters
		expandAroundCenter(s, i, i + 1);
	}

	return s.substring(start, start + maxLength);

	// Helper function to expand around the center
	function expandAroundCenter(str, left, right) {
		while (left >= 0 && right < str.length && str[left] === str[right]) {
			const currentLength = right - left + 1;
			if (currentLength > maxLength) {
				start = left;
				maxLength = currentLength;
			}
			left--;
			right++;
		}
	}
}
