// Implement a function sigma(num) that, given a number, returns the sum of all positive integers from 1 up to number (inclusive).

function sigma(num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log(sigma(5))