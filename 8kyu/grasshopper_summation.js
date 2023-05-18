// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


// My solution
// a positive number greater than 0
var summation = function (num) {
    // declare new variable to be summation between 0-num
    let sum = 0;
    
    // loop to add all numbers between 0-num to new variable
    for (let i = 0; i <= num; i++){
      sum += i;
    }
    
    // return summation of all numbers between 0-num
    return sum
  }
  
  // 4 => 1 + 2 + 3 + 4 = 10
  