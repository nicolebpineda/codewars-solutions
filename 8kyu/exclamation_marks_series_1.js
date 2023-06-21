// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// My solution
// Take in a string
function remove (string) {
    // Remove exclamation mark on the end if there is one then return or return string unchanged
    return string[string.length - 1] === '!' ? string.slice(0, -1) : string
}
