// Problem - leetcode - Easy
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(input) {
	if (input === undefined || input.length === 0) {
		return false;
	}

	const stack = [];
	const parenthesesMap = {
		"(": ")",
		"[": "]",
		"{": "}",
	};

	for (let char of input) {
		if (char in parenthesesMap) {
			stack.push(char);
		} else {
			const lastParentheses = stack.pop();
			if (char !== parenthesesMap[lastParentheses]) {
				return false;
			}
		}
	}
	return stack.length === 0;
}

console.log(isValid("{}()"));
