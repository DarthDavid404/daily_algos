# Replace any negative array values with 'Dojo'.

def dojo(arr):
    for i in range(0, len(arr)-1, 1):
        if arr[i] < 0:
            arr[i] = "dojo"
            
    print(arr)
    

dojo([1,3,-4,5,-7,9,-11,12])