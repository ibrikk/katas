// ['apple', 'notebook', 'apple']
// ['apple': 2, 'notebook': 1]

const myFunc = items => {
  let itemsObj = {};
  for (const item of items) {
    if (itemsObj[item]) {
      itemsObj[item]++;
    } else {
      itemsObj[item] = 1;
    }
  }
  const nestedArr = Object.entries(itemsObj);
  return nestedArr.reduce((acc, val) => acc.concat(val), []);
}

console.log(myFunc(['apple', 'notebook', 'apple']));
console.log(myFunc(['apple', 'notebook', 'apple', 'apple']));