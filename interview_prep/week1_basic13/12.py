# Return the given array, after setting any negative values to zero

def negZero(arr):
    for i in range(0, len(arr)-1, 1):
        if arr[i] < 0:
            arr[i] = 0
    return arr

print(negZero([2,-2,-4,2,5,-10,12]))

