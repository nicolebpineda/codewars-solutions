// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My solution

// Take in two strings
function solution(str, ending){
    // Return true or false depending if the end of str parameter matches ending parameter
    return str.endsWith(ending)
}
  
// (test, t) => true
// (string, st) => false
  