// Problem - Leetcode - Easy
// Topics - String

function lengthOfLastWord(s) {
	if (s.length === 0) {
		return 0;
	}
	const sArr = s.split(" ").filter((word) => word != "");
	return sArr[sArr.length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));