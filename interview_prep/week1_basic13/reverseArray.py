# given an array, reverse it. 

# ----- With ::-1 

def reverseArray(arr):
        newArr = arr[::-1]
        print(newArr)
    
reverseArray([0,1,2,3])

# ----- With reverse()

def reverseArray2(arr2):
    arr2.reverse()
    print(arr2)
    
reverseArray2([0,1,2,3])

# ----- With range

def reverseArray3(arr3): 
    newArr3 = []
    for i in range(len(arr3)-1, -1, -1):
        newArr3.append(arr3[i])
    print(newArr3)
    
reverseArray3([0,1,2,3])