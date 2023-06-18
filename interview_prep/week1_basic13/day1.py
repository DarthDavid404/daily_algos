# Create a function that, given a string, returns all of that string’s contents, but without blanks.


def stringBlanks(string): 
    newString = ""
    for letter in string:
        if letter != " ":
            newString += letter
    return newString

print(stringBlanks("thi s is ast rin g"))

