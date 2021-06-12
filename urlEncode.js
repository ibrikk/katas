const urlEncode = (text) => {
  let result = ''
  let trimmed = text.trim();
  for (let char of trimmed) {
    if (char === ' ') {
      result += '%20';
    } else {
      result += char;
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode(" blue is greener than purple for sure "));