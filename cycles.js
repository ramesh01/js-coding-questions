// Question: Implement a function that takes one or more values and returns a function that cycles through those values each time it is called

function cycle(input) {
    const inputArr = input.split(',');
    let index = 0;

    return function() {
        const currentVal = inputArr[index];
        // % helps in resetting index if index values goes beyond input length.
        index = (index + 1) % inputArr.length;
        return currentVal;
    }
}

const test = cycle('hello, hi');
console.log(test());
console.log(test());
console.log(test());