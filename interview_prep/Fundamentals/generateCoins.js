// Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins. Console.log the result.


function generateCoins(cents) {
  var coinCount = [];
  var centChart = {
    1: "penny",
    5: "nickel",
    10: "dime",
    25: "quarter"
  };

  while (cents > 0) {
    if (cents - 25 >= 0) {
      cents -= 25;
      coinCount.push(centChart[25]);
    } else if (cents - 10 >= 0) {
      cents -= 10;
      coinCount.push(centChart[10]);
    } else if (cents - 5 >= 0) {
      cents -= 5;
      coinCount.push(centChart[5]);
    } else if (cents - 1 >= 0) {
      cents -= 1;
      coinCount.push(centChart[1]);
    }
  }
  
  return coinCount;
}

console.log(generateCoins(57));



