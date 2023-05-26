// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

// My solution

// a string
function isPalindrome(x) {
    // reverse string
    let reversed = x.split('').reverse().join('');
    
    // check if original string is equal to new string
    return x.toLowerCase() == reversed.toLowerCase() ? true : false;
}
  
// Example: racecar => true ; codewars => false
