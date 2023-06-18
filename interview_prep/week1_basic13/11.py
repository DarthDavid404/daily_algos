# Square each value in a given array, returning that same array with changed values.

def squareArr(arr):
    for i in range(0, len(arr), 1):
        arr[i] = arr[i] **2
    return arr
    
print(squareArr([2,4,6]))

