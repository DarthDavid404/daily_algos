# Analyze an array’s values and print the average.

def sumArr(arr):
    sum = 0
    for num in arr:
        sum += num
    print (sum / len(arr))
    
sumArr([1,2,3])

