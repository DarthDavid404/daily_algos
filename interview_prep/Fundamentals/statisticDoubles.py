# Implement a ‘die’ that randomly returns an
# integer between 1 and 6 inclusive. Roll a pair of
# these dice, tracking the statistics until doubles
# are rolled. Display the number of rolls, min, max,
# and average.

import random

def doubles():
    roll1 = random.randint(1, 6)
    roll2 = random.randint(1, 6)
    roll_arr = []
    average = 0
    
    while roll1 != roll2:
        
        roll1=random.randint(1, 6)
        roll2=random.randint(1, 6)
        roll_arr.append(roll1)
        roll_arr.append(roll2)
        
    average = len(roll_arr)
    
    min = roll_arr[0]
    max = roll_arr[0]
    
    for num in roll_arr:
        if num >= max:
            max = num
            
        if num < min: 
            min = num
            

    return [roll_arr, min, max, average]

print(doubles())
