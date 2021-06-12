const sumLargestNumbers = data => {
  const newData = [...data].sort((a, b) => b - a);
  const largest = newData[0];
  const secondLargest = newData[1];
  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([123, 111, 4, 34, 6, 92, 2])); 