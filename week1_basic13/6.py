# Given an array, print the max, min and average values for that array.

def MaxMinAve(arr):
    max = arr[0]
    min = arr[0]
    sum = 0
    for num in arr:
        if num > max:
            max = num
        if num < min:
            min = num
        sum+= num
    print(max)
    print(min)
    print(sum / len(arr))
    
MaxMinAve([7,1,3,4,2,6])
    