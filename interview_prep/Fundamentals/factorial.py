# Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).

def factorial(num):
    product = 1
    for i in range(1, num + 1, 1):
        product *= i
    
    return product

print(factorial(5))
