// Given an array, print the max, min and average values for that array.

function maxMinAve(arr) {
    let max = arr[0]
    let min = arr[0]
    let sum = 0
    for (let i=0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
        sum += arr[i]
    }
    console.log(min)
    console.log(max)
    console.log(sum/arr.length)
}

maxMinAve([2,6,1,18,3,9])

// es6

const maxMinAveEs6 = arres6 => {
    let maxes6 = arres6[0]
    let mines6 = arres6[0]
    let sumes6 = 0

    for (const num of arres6) {
        if (num > maxes6) {
            maxes6 = num
        }
        if (num < mines6) { 
            mines6 = num
        }
        sumes6 += num
    }
    console.log(mines6)
    console.log(maxes6)
    console.log(sumes6 / arres6.length)
}

maxMinAveEs6([2,6,1,18,3,9])