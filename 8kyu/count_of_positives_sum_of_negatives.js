// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My solution
// An array of positive and negative integers
function countPositivesSumNegatives(input) {
  // Create value for count of positive numbers
  let positiveNumCount = 0; 
  // Create value for sum of negative numbers
  let negativeSum = 0;
  
  // If input does not have numbers or is null, return empty array
  if (input === [] || input === null){
    return [];
  }else { 
    // Run forEach loop on array to test if each number is positive or negative
    input.forEach(num => {
      // If the number is greater than zero, increace count of positive numbers
      // Otherwise add to sum of negative numbers
      num > 0 ? positiveNumCount++ : negativeSum += num;
    })
  }  
  // If count of postive numbers and sum of negative numbers are zero, return empty array
  // Otherwise return array with count of positive numbers and sum of negative numbers
  return positiveNumCount == 0 && negativeSum == 0 ? [] : [positiveNumCount, negativeSum];
}

// Example: [1, 0, 8, -4, -2] => [2, -6] 