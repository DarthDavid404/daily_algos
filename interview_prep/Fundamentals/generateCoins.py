# Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins. Console.log the result.

def generateCoins(cents):
    coinCount = []
    centChart = {
        1 : "penny",
        5 : "nickel",
        10 : "dime",
        25 : "quarter",
    }
    
            
    while cents > 0:
        if cents - 25 >= 0:
            cents -= 25
            coinCount.append(centChart[25])
            
        elif cents - 10 >= 0:
            cents -= 10
            coinCount.append(centChart[10])
            
        elif cents - 5 >= 0:
            cents -= 5
            coinCount.append(centChart[5])
        
        elif cents - 1 >= 0: 
            cents -= 1
            coinCount.append(centChart[1])
    return coinCount

print(generateCoins(37))


def generateCoins2(cents2):
    coinCount2 = []
    coins = {
        25:"quarter",
        10:"dime",
        5:"nickel",
        1:"penny"
    }
    
    for key in coins:
        while key <= cents2:
            coinCount2.append(key)
            cents2 -= key
        
    return coinCount2
        
print(generateCoins2(37))
