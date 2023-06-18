// Given an array and a value Y, count and print the number of array values greater than Y.

function valueY(arr, y) {
    count = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > y) {
            count ++
        }
    }
    return count
}

console.log(valueY([0,3,5,7,3,9,2,4,12], 6))

// es6

const valueYes6 = (arres6, yes6) => {
    count = 0
    arres6.forEach(element => {
        if (element > yes6) {
            count++
        }
    })
return count;
}

console.log(valueYes6([0,3,5,7,3,9,2,4,12], 6))