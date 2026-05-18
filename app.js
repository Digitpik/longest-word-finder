function findLongestWordLength(str) {
  // 1. Split the sentence into an array of individual words
  const words = str.split(" ");
  let maxLength = 0;

  // 2. Loop through the words array to find the maximum length
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  // 3. Return the final maximum length number
  return maxLength;
}

// Test examples manually in the console
console.log("--- Testing Longest Word Finder ---");
const sentence = "The quick brown fox jumped over the lazy dog";
console.log(`Sentence: "${sentence}"`);
console.log(`Longest word length: ${findLongestWordLength(sentence)}`);
