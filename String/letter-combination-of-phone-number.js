// Problem - Leetcode - Medium
// Topics - Hash Table, String, Backtracking
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

function letterCombinations(digits) {
	if (digits === undefined || digits.length == 0) {
		return "";
	}
	const digitToLetters = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
	};
	const result = [];
	function backtrack(current, index) {
		if (index === digits.length) {
			result.push(current);
			return;
		}

		const letters = digitToLetters[digits[index]];
		for (let i = 0; i < letters.length; i++) {
			backtrack(current + letters[i], index + 1);
		}
	}
	backtrack("", 0);
	return result;
}

console.log(letterCombinations("23"));
