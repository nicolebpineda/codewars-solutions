// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// My solution
// Take in a name
function nameShuffler(str){
    // divide string into array 
    let splitName = str.split(' ')
    // Return name with last name first
    return `${splitName[1]} ${splitName[0]}`
}
  
// Bob Boberton => Boberton Bob