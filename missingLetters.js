function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0); // 97
  
  let missing = undefined;

  str.split('').forEach(char => {
    if (char.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode)
    }
  });
  return missing;

}

console.log(fearNotLetter("abce"));

// fearNotLetter("abce") should return the string d.

// fearNotLetter("abcdefghjklmno") should return the string i.