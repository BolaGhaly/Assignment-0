function frequencyCounter(word) {
  var frequencyObject = {};
  for (var i = 0; i < word.length; i++) {
    var character = word.charAt(i);
    if (frequencyObject[character]) {
      frequencyObject[character]++;
    } else {
      frequencyObject[character] = 1;
    }
  }
  return frequencyObject;
}

// Do not edit this line;
module.exports = frequencyCounter;
