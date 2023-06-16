# Implement a function sigma(num) that, given a number, returns the sum of all positive integers from 1 up to number (inclusive).

def sigma(num):
    sum = 0
    for i in range(0, num + 1, 1):
        sum += i
    return sum
        
print(sigma(5))