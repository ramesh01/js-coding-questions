// Problem - leetcode - Easy
// Topics - String, Trie
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs) {
	if (strs.length === 0) return "";

	let prefix = strs[0];
	for (let i = 1; i < strs.length; i++) {
		let j = 0;
		while (
			j < prefix.length &&
			j < strs[i].length &&
			prefix[j] === strs[i][j]
		) {
			j++;
		}
		prefix = prefix.substring(0, j);
		if (prefix === "") {
			break;
		}
	}
	return prefix;
}

console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// Method 2
function longestCommonPrefix(strings) {
	if (strings.length === 0) return "";

	strings.sort();
	const firstStr = strings[0];
	const lastStr = strings[strings.length - 1];

	let commonPrefix = "";
	for (let i = 0; i < firstStr.length; i++) {
		if (firstStr[i] === lastStr[i]) {
			commonPrefix += firstStr[i];
		} else {
			break;
		}
	}

	return commonPrefix;
}

// Example usage:
const strings1 = ["flower", "flow", "flight"];
const strings2 = ["dog", "racecar", "car"];
