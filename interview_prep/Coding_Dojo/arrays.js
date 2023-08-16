// Given an Array, move the lowest element to the array's front, shifting backward any elements previously ahead of it


const arr = [4,2,1,3,5];

const minToFront = (arr) => {
    let min = arr[0];
    let minIndex = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    for (let i = minIndex; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = min;

    return arr;
}

console.log(minToFront(arr));