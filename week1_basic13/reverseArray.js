// given an array, reverse it. 

function reverseArray(arr) {
    newArr = []
    for (let i=arr.length - 1; i >-1; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

console.log(reverseArray([0,1,2,3,4]))

// es6

const reverseArrayes6 = arres6 => {
    const newArres6 = [...arres6].reverse();
    console.log(newArres6)
}

reverseArrayes6([0,1,2,3,4])