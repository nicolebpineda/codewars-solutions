// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// my solution
function between(a, b) {
    let arrayOfIntegers = [];
    for (let i = a; i <= b; i++){
      arrayOfIntegers.push(i) 
    };
    return arrayOfIntegers;
}
 
// P - two integers
// R - an array of integers from a to b
// E - a = 1; b = 4 returns [1, 2, 3, 4]
// P - create array, loop to add each number from a to b to the array, return array 
