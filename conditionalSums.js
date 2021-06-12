const conditionalSum = (values, condition) => {
  // Your code here
  let sum = 0;
  if (condition === 'even') {
    for (num of values) {
      if (num % 2 === 0) {
        sum += num;
      }
    }
  } else if (condition === 'odd') {
    for (num of values) {
      if (num % 2 !== 0) {
        sum += num;
      }
    }
  }
  else {
    return null;
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
console.log(conditionalSum([], 'od'));
