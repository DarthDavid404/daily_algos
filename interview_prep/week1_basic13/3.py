# Given an array, find and print its largest element.

def findLargest(arr): 
    largest = arr[0]
    for num in arr:
        if num > largest:
            largest = num
    print(largest)
    
findLargest([0,8,3,7,12,4,17,19,25,2])

