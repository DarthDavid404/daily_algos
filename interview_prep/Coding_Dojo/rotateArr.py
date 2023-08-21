# Implement rotateArr(arr, shiftBy) that accepts array and offset. 
# Shift arr's values to the right by that amount. 'Wrap-around' 
# any values that shift off array's end to the other side, so that 
# no data is lost. Operate in-place: given ([1,2,3],1), 
# change the array to [3,1,2]. Don't use built-in functions.
# Second: allow negative shiftBy (shift L, not R).
# Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
# Fourth: minimize the touches of each element.

# Okay, so basically, all I need to do here is shift the array by the offset for starters.
def reverse_array(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

def rotateArr(arr, shiftBy):
    n = len(arr)
    shiftBy %= n  # Handle negative and large shiftBy values
    
    if shiftBy < 0:
        # Rotate left by taking negative of shiftBy and reversing
        shiftBy = -shiftBy
        reverse_array(arr, 0, n - 1)
        reverse_array(arr, 0, shiftBy - 1)
        reverse_array(arr, shiftBy, n - 1)
    else:
        # Rotate right by reversing in a different order
        reverse_array(arr, 0, n - 1)
        reverse_array(arr, 0, shiftBy - 1)
        reverse_array(arr, shiftBy, n - 1)
    
    return arr

print(rotateArr([1, 2, 3], 1)) 
print(rotateArr([1, 2, 3], -1))  

