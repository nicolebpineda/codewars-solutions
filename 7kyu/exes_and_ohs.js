// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// my solution
function XO(str) {
    str = str.toLowerCase()
    let xCount = 0;
    let oCount = 0;
    
    for (let i = 0; i <= str.length; i++){
      if (str[i] === 'x'){
        xCount++
      }
      if (str[i] === 'o'){
        oCount++
      }
    }
  
    if (xCount === oCount){
      return true
    } else {
      return false
    } 
}
