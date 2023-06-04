// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// My soluiton

// Take in a number
function squareDigits(num){
    // Turn number into a string then convert into array
    let numArray = num.toString().split('')
    
    // Iterate over array to square each number which creates new array in squaredNums variable
    let squaredNums = numArray.map((n) => {
      return n = Number(n) ** 2
    })
    
    // Join array and convert into number then return
    return Number(squaredNums.join(''))
}
  
// 24 => 416