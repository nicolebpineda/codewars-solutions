// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.\
// [output] a string

// My solution
// Take in a string that may have non-alphabetic characters
function reverseLetter(str) {
    // Return string with non-alphabetic characters removed and reversed
    return str.replace(/[^a-z]/g, '').split('').reverse().join('')
}
  
// 'hell0o world?!' => 'hello world'
