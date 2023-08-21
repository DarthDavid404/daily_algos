// Given an array, reverse it without using another array. 

const reversearr = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        let placeholder = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = placeholder;
    }
    return arr;
}
console.log(reversearr([1,2,3,4,5]))


