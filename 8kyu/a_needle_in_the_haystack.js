// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

// My soluiton
// Take in an array of various data types
function findNeedle(haystack) {
    // Find index where needle is located
    let location = haystack.indexOf('needle')
    // Return string that includes index of needle 
    return `found the needle at position ${location}`
}
  
// [1, 'hay', true, 'needle'] => 'found the need at position 3'