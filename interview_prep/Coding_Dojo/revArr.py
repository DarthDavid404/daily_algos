# Given a numerical array, reverse the order of values, in-place. 
# The reversed array should have the same length, with existing 
# elements moved to other indices so that order of elements is reversed. 
# Working 'in-place' means that you cannot use a second 
# array – move values within the array that you are given. 
# As always, do not use built-in array functions such as splice().



# Pseudocode: Okay, so I need to reverse the values of the whole array without using a new array, which means
# I can't use insert or place anything into a new array. Instead, I will need to iterate over the array and swap
# two values. I can do it by swapping the first and the last array value then second and second to last, etc...

def reverseArray(arr):
    # First, set pointers
    left = 0
    right = len(arr) -1
    
    while left < right:
        # now, set up a while loop to handle the iteration.
        arr[left], arr[right] = arr[right], arr[left]
        # The above code swaps each value directly with no placeholder needed.
        # Now, I just add and subtract 1 from each side and we are good to go!
        left+=1
        right-=1
        
    return arr

print(reverseArray([1,2,3,4,5]))


# The time complexity of this code is (O(n/2)) But Asympotically it is considered O(n) where n is the length of arr
# Space uses only a constant amount regardless the size of the array. Space complexity is O(1)

