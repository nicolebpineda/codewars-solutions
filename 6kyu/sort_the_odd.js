// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// My solution
// Take in an array of numebrs
function sortArray(array) {
    let oddNums = []
    // Itterate over array and add odd nums to new array
    for (let i = 0; i < array.length; i++){
      if (array[i] % 2 !== 0){ 
        oddNums.push(array[i])
      }
    }
    // Sort odd numbers array
    let sortedOddNums = oddNums.sort((a, b) => a - b)
    
    // Iterate over original array again, replacing odd numbers with sorted odd numbers
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0){
        array[i] = sortedOddNums.shift()
      }
    }
    // Return original array with the odd numbers sorted while leaving the even numbers in their original poisiton
    return array
}
  
// [9, 6, 4, 3, 2, 7] => [3, 6, 4, 7, 2, 9]
