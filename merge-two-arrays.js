// Question: Given 2 arrays that are sorted [0,3,4,31] and [4,6,30].
// Merge them and return sorted array with out using inbuilt functions
// [0,3,4,4,6,30,31]

// Method: using js concat, sort functions

function mergeTwoArrays(arr1, arr2) {
	return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergeTwoArrays([0, 3, 4, 31], [4, 6, 30]));

// Method

function mergeTwoArrs(arr1, arr2) {
	const mergedArray = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length || j < arr2.length) {
		if (arr1[i] === undefined) {
			mergedArray.push(arr2[j]);
			j++;
		} else if (arr2[j] === undefined) {
			mergedArray.push(arr1[i]);
			i++;
		} else if (arr1[i] < arr2[j]) {
			mergedArray.push(arr1[i]);
			i++;
		} else {
			mergedArray.push(arr2[j]);
			j++;
		}
	}
	return mergedArray;
}
console.log(mergeTwoArrs([0, 3, 4, 31], [4, 6, 30]));
