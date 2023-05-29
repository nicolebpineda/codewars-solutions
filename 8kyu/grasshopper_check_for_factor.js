// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

// My solution

// two number values
function checkForFactor (base, factor) {
    // use modules to check if there is a remainder 
    // using if/else statements, if there is no remainder, return true otherwise, return false
    if (base % factor === 0 ){
      return true 
    }else {
      return false
    }
}
  
// Example
// 9 % 3 = 0 => true (3 is a factor of 9)
// 9 % 2 != 0 => false (2 is not a factor of 9)