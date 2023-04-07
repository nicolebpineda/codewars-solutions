// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// my solution
function maps(x){
    let doubled = [];
    
    x.forEach((item) => doubled.push(item * 2))
      
    return doubled
  }
  