// Given an array, find and print its largest element.

function findLargest(arr) {
    let largest = arr[0]
    for (let i=0; i < arr.length;i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargest([0,8,3,7,12,4,17,19,25,2]))

// es6

const findLargestes6 = arres6 => {
    let largestes6 = arres6[0]
    arres6.forEach(element => {
        if (element > largestes6) {
            largestes6 = element
        }
    });
    return largestes6
}

console.log(findLargestes6([0,8,3,7,12,4,17,19,25,2]))