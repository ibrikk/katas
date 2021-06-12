const repeatNumbers = (data) => {
  let res = '';
  for (let i = 0; i < data.length; i++) {
    let firstOutput = '';
    let firstNum = data[i][0];
    let secondNum = data[i][1];

    for (let j = 0; j < secondNum; j++) {
      firstOutput += firstNum;
    }
    res += firstOutput.concat(', ');
  }
  return res;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
