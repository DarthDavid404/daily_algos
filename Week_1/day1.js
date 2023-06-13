// Create a function that, given a string, returns all of that string’s contents, but without blanks.

function removeSpaces(string) {
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            newString += string[i]
        }
    }

    return newString

}




// Callback Function

const removeSpaces2 = string2 => {
    let newString2 = ""
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] !== " ") {
            newString2 += string2[i]
        }
    }
    return newString2
}

console.log(removeSpaces2("thi s is ast rin g"))