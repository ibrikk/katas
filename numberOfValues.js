const numberOfVowels = data => {
  let count = 0; 
  for (char of data) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));