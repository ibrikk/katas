const camelCase = input => {
  let res = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      res += input[i + 1].toUpperCase();
    } else {
      res += input[i];
    }
  }
  return res;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));