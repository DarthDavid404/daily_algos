# Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

def threesFives(val1,val2, div1, div2):
    sum = 0
    valueArr = []
    for i in range(val1, val2 + 1, 1):
        if i % div1 == 0:
            if i % div2 == 0:
                continue
            else:
                sum += i
                valueArr.append(i)
                
        elif i % div2 == 0:
            sum += i
            valueArr.append(i)
        else: 
            continue
    return [sum, valueArr]
            
        
print(threesFives(3, 60, 2, 3)) 
