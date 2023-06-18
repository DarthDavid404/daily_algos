// Replace any negative array values with 'Dojo'.


function dojo(arr) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "dojo"
        }
    }console.log(arr)
    
}

dojo([1,3,-4,5,-7,9,-11,12])



const dojoEs6 = arrEs6 => {
    const result = arrEs6.map(num => num < 0 ? "dojo" : num)

    console.log(result)
}

dojoEs6([1,3,-4,5,-7,9,-11,12])

