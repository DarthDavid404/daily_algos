# Implement a ‘die’ that randomly returns an
# integer between 1 and 6 inclusive. Roll a pair of
# these dice, tracking the statistics until doubles
# are rolled. Display the number of rolls, min, max,
# and average.

import random

def doubles():
    roll1 = random.randint(1, 6)
    roll2 = random.randint(1, 6)
    roll1_arr = []
    roll2_arr = []
    while roll1 != roll2:
        print("running")
        roll1=random.randint(1, 6)
        roll2=random.randint(1, 6)
        roll1_arr.append(roll1)
        roll2_arr.append(roll2)
        
        
    return [roll1_arr, roll2_arr]

print(doubles())
