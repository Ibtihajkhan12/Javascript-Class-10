function countWords(sentence) {
    // Initialize the word count
    let wordCount = 0;
    // Flag to track if we're currently in a word
    let inWord = false;

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Check if the character is not a whitespace
        if (sentence[i] !== ' ') {
            // If we are not already in a word, we found a new word
            if (!inWord) {
                wordCount++;
                inWord = true; // Set the flag to indicate we're in a word
            }
        } else {
            // If we encounter a space, we are no longer in a word
            inWord = false;
        }
    }

    return wordCount;
}

// Example usage:
const sentence = "   This is a test sentence.   ";
const result = countWords(sentence);
console.log(`Word count: ${result}`);