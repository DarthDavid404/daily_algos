// Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).

function factorial(num) {
    result = 1
    for (let i=1; i<num + 1;i++) {
        result *=i
    }
    return result
}
console.log(factorial(5))

// es6

const factorial2 = num => {
    if (num === 0 || num === 1) {
        return 1;
    }

    return num * factorial2(num - 1);
};

console.log(factorial2(5));