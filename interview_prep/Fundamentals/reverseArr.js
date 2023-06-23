// Reverse an array and return it. 

function reverseArr(arr) {
    let newArr = []
    for (let i = arr.length -1; i>-1; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

console.log(reverseArr([1,2,3,4,5]))