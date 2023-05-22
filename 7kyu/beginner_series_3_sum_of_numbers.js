// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

// My solution

// Two integers
function getSum(a, b){
    // Create sum value 
    let sumBetweenNums = 0; 
    
    // Detemine which parameter is bigger/smaller
    let min = a < b ? a : b;
    let max = a > b ? a : b;
    
    // Run loop to add numbers between min & max
    for (let i = min; i <= max; i++){
      sumBetweenNums += i;
    }
    
    // Return sum of integers between min & max
    return sumBetweenNums 
}
// Example: a = -1; b = 2 => return 2 (-1 + 0 + 1 + 2)
  