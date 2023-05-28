// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// My solution

// a number greater than 0
const reverseSeq = n => {
  
    // declare empty array
    let reversed = []
    
    // run loop to add n to array until n reaches 0
    for (let i = 0; i < n; n--){
      reversed.push(n)
    }
    
    // return the array with reverse sequence
    return reversed;
};
  
// n=3 => [3,2,1]
  