// Return the given array, after setting any negative values to zero

function negZero(arr) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr
}

console.log(negZero([2,-2,-4,2,5,-10,12]))

// es6

const negZeroEs6 = arrEs6 => {
    arrEs6 = arrEs6.map(num => num < 0 ? 0 : num)
    return arrEs6
}

console.log(negZeroEs6([2,-2,-4,2,5,-10,12]))