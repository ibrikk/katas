const camelCase = input => {
  let res = input;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      res = input.replace(' ' + input[i+1], `${input[i+1]}`.toUpperCase());
      input = res;
    }
  }
  return res;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));