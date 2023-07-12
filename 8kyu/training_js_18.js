// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// For example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"


// My solution
// Take in a string and a character
function splitAndMerge(string, separator) {
    // Separate string into array of words
    // Iterate over array, split word then join again with separator
    // Return string back into sentence with original spaces
  
    return string.split(' ').map(x => x.split('').join(separator)).join(' ')
}
  