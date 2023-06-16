// Iterate through a given array, printing each value.


function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printArr([0,2,2,6,4,5])

// es6

const printArrEs6 = arr => {
    arr.map(num => console.log(num))
}

printArrEs6([0,2,2,6,4,5])
