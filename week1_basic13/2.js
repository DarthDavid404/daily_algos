// Print integers from 0 to 255, and with each integer print the sum so far.

function sumTo255() {
    let sum = 0
    for (let i=0; i<255; i++) {
        sum += i
        console.log(i)
        console.log(sum)
    }
}

sumTo255();

// es6

const sumTo255es6 = () => {
    let sum = 0
    let z = 0

    while (z < 255) {
        sum += z
        console.log(z);
        console.log(sum);
        z++;
    }
}

sumTo255es6();