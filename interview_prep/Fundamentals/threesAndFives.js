// # Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

function threesFives(val1, val2) {
    let sum = 0
    let valArr = []
    for (let i = val1; i < val2 + 1 ; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            if (i % 3 == 0 && i % 5 == 0) {
                continue
            }
            else {
                sum += i
                valArr.push(i)
            }
            }
            else { 
                continue
            }
        }
        return [sum, valArr]
    }

    console.log(threesFives(3, 60))



// es6

