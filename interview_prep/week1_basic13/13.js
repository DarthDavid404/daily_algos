// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the
// end.

function moveForward(arr) {
    for (i in Range(0, len(arr)-1, 1)) {
        arr[i] = arr[i+1]
    }
    return arr
}

moveForward([1,2,3,4,5,6,7,8,9])


// es6

const moveForwardEs6 = arrEs6 => {
    arrEs6 = arrEs6.map((_, index) => (index < arrEs6.length - 1 ? arrEs6[index + 1] : 0))
    return arrEs6
}

moveForwardEs6([1,2,3,4,5,6,7,8,9])

