// Analyze an array’s values and print the average.

function sumArr(arr) {
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum / arr.length)
}

sumArr([1,2,3])

// es6

const sumArrEs6 = arrEs6 => {
    let sum = 0;
    arrEs6.forEach(num => {
        sum += num;
    });
    console.log(sum / arrEs6.length);
};

sumArrEs6([1, 2, 3]);