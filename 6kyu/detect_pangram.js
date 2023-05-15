// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// my solution
function isPangram(string){
    string = string.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return alphabet.split('').every(x => string.includes(x))
}
  
// P - a sentence string
// R - true or false if the string has every letter of alphabet. 
// E - 'Test this sentence' => false
// P - Need alphabet variable. Make string lowercase. Run function to test if string includes each letter from the alphabet. 