# Print integers from 0 to 255, and with each integer print the sum so far.

def sumZeroTo255():
    sum =0
    for num in range(0, 255, 1):
        sum += num
        print(num)
        print(sum)
        
sumZeroTo255()