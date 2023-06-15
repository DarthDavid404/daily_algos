# Given an array and a value Y, count and print the number of array values greater than Y.

def arrGreaterThanY(arr, y):
    count = 0
    for num in arr:
        if num > y:
            count += 1
    return count

print(arrGreaterThanY([0,3,5,7,3,9,2,4,12], 6))