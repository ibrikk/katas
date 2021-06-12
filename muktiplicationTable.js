const multiplicationTable = maxValue => {
  let arr = [];
  for (let i = 1; i <= maxValue; i++) {
    let res = '';

    for (let j = 1; j <= maxValue; j++) {
      res = res + i * j;
      if (j < maxValue) {
        res = res + '';
      }
    }
    arr.push(res);
  }
  return arr.join('');
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));