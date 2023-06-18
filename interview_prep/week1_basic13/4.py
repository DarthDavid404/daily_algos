# Create an array with all the odd integers between 1 and 255 (inclusive).

def createOddArr():
    newArr = []
    for num in range(1, 256, 2):
        newArr.append(num)
    return newArr

print(createOddArr())