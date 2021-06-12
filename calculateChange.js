const calculateChange = function (total, cash) {
  let change = cash - total;
  let outputChange = '';
  let com = ', ';
  let changeArray = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let changeText = [
    'twentyDollar: ',
    'tenDollar: ',
    'fiveDollar: ',
    'twoDollar: ',
    'dollar: ',
    'quarter: ',
    'dime: ',
    'nickel: ',
    'penny: ',
  ];

  for (let i = 0; i <= changeArray.length; i++) {
    if (change - changeArray[i] > 0) {
      outputChange += changeText[i] += Math.floor(change / changeArray[i]);
      if (i <= changeArray.length - 2) {
        outputChange += com;
      }
      change -= Math.floor(change / changeArray[i]) * changeArray[i];
    }
  }
  return outputChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));