# Implement a function sumToOne(num) that,
# given a number, sums that number’s digits
# repeatedly until the sum is only one digit. Return
# that final one digit result.

def sumToOne(num):
    sum = 0
    for digit in str(num):
        sum += int(digit)
    return sum
    
    
print(sumToOne(202))
            
