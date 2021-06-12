const makeCase = (input, type) => {
  let res = '';
  let trimmed = input.trim();
  if (type === 'camel') {
    for (let i = 0; i < trimmed.length; i++) {
      if (trimmed[i] === ' ') {
        res += trimmed[i + 1].toUpperCase();
      } else {
        res += trimmed[i];
      }
    }
  } 
  return res;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));