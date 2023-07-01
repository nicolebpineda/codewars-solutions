// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// My solution
function digitize(n) {
    // Convert the number to a string type case value to convert into array
    // Run function on each value to convert back into numbers and return value to array
    // Return array reversed
    return Array.from(String(n), num => Number(num)).reverse()  
}
  
// 123 => [3, 2, 1]