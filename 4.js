// Create an array with all the odd integers between 1 and 255 (inclusive).

function oddArr255() {
    let newArr = []
    for (let i = 1; i < 256; i = i + 2) {
        newArr.push(i)
    }
    return newArr
}

console.log(oddArr255())

// es6 

const oddArr255es6 = (n=1, newArr = []) => {
    if (n > 255) return newArr;
    newArr.push(n);
    return oddArr255(n + 2, newArr);
}

console.log(oddArr255es6())