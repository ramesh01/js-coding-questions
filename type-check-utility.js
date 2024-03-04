// Question: Implement utilities to determine primitive variable types in JavaScript

function primitiveTypeCheck(input) {
	const type = typeof input;
	if (type !== "object") {
		return true;
	}
	return false;
}
