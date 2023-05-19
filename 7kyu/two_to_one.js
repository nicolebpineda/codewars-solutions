// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My soluiton
// two strings
function longest(s1, s2) {
    // add strings together and create longest value
    let deleteDuplicates = s1 + s2;
    let longest = []; 
    
    // add unique letters to longest
    deleteDuplicates.split('').forEach(letter => {
      if (!longest.includes(letter)){
        longest.push(letter);
      }
    }) 
    
    // sort, join then return new string of unique letters 
    return longest.sort().join('');
}
  
// thisisanexample => aehilmnpstx
