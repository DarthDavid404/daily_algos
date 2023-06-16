# Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the
# end.

def moveForward(arr):
    for i in range(0, len(arr)-1, 1):
        arr[i] = arr[i + 1]
        
    arr[len(arr)-1] = 0
    print(arr)
    
    
moveForward([1,2,3,4,5,6,7,8,9])
