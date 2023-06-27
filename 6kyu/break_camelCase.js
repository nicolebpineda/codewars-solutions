// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My solution
// Take in a string
function solution(string) {
    // divide string into array, then iterate over string for uppercase letters
    string = string.split('').map(letter => {
      // Add space to uppercase letter
      if (letter === letter.toUpperCase()){
        letter = ' ' + letter
      }
      return letter
    })
    // Put string back together with new added spaces
    return string.join('') 
}
  