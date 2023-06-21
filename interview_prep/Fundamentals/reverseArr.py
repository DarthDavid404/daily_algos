# Reverse an array and return it. 

def reverseArr(arr):
    newArr = []
    for num in arr:
        newArr.insert(0, num)
    return newArr

print(reverseArr([3,4,5,6,7,8,9]))