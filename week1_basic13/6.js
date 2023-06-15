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