// Square each value in a given array, returning that same array with changed values.

function squareArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2
    }

    return arr
}

console.log(squareArr([2,4,6]))

// es6

const squareArrEs6 = arr => {
    arr = arr.map(i => i ** 2)
    console.log(arr)
}

squareArrEs6([2,4,6])

