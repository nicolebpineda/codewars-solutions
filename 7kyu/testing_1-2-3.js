// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// my solution
var number=function(array){
    let newArray = []
    array.map(function(element, index){
      for (let i = 1; i <= array.length; i++){
          newArray.push(`${index + 1}: ${element}`) 
          break;
         }
    }) 
    return newArray
}