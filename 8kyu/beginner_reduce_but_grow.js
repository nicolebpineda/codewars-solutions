// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// My solution
// Take in array of numbers
function grow(x){
    // Run method over array to calculate multiplying each number together
    return x.reduce((acc, c) => acc * c)
}
  
// [2, 2, 2] => 8
