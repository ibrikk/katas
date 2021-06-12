const conditionalSum = (values, condition) => {
  // Your code here
  let newValues = [];
  if (condition === 'even') {
    for (num of values) {
      if (num % 2 === 0) {
        newValues.push(num);
      }
    }
  } else if (condition === 'odd') {
    for (num of values) {
      if (num % 2 !== 0) {
        newValues.push(num);
      }
    }
  }
  return newValues;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
