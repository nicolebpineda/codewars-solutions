// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should reutrn 9 because 1^2 + 2^2 + 2^2 = 9.

// my solution
function squareSum(numbers){
    let sum = 0
    
    numbers.forEach(n => {
      sum += n * n;
    })
    
    return sum
  }
  