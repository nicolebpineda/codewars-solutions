// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My solution

// string of words
function findShort(s){
    // split string into array, iterate over array, find shortest word, then return its length
    return s.split(' ').reduce(function(a, b){ return a.length < b.length ? a : b;}).length
}
  
// 'Test for shortest word' => 3