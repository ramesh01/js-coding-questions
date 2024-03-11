//  "Number Line Jumps" or "Kangaroo Jumping" problem,

function kangarooJump(x1, v1, x2, v2) {
	if (x1 === x2 && v1 === v2) {
		return "YES";
	}

	// if x1 !== x2 and v1 === v2 
	if (v1 === v2) {
		return "NO";
	}

	if ((x2 - x1) % (v1 - v2) == 0 && (x2 - x1) / (v1 - v2) >= 0) {
		return "YES";
	}

	return "NO";
}

console.log(kangarooJump(0, 2, 5, 3));
