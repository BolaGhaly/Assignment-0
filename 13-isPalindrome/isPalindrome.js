function isPalindrome(word) {
  const len = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      word = false;
      return word;
    } else if (word[i] === word[len - 1 - i]) {
      word = true;
    }
  }
  return word;
}

// Do not edit this line;
module.exports = isPalindrome;
