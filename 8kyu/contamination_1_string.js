// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// My solution
// Take in a string and a single character
function contamination(text, char){  
    // Create array to add new characters
    let newText = []
    
    // Return empty string if either parameters are empty
    if (text === "" || char === "") {
        return ""
    } else {
        // Add same ammount of characters to array as there are in the text string
        for (let i = 0; i < text.length; i++){
            newText.push(char)
        }
    }
    // Combine array elements into one string and Return
    return newText.join('')
}
  
// 'kata' , 'q' => 'qqqq'
// 'hello' , '' => ''
// '' , 'world' => ''
  