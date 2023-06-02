// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My solution

// Take in a string 
function getCount(str) {
    // declare vowel count variable
    let vowelCount = 0
    
    // loop through the string and count number of vowels
    str.split('').forEach(letter => {
      if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' ||letter == 'u'){
        vowelCount++
      }     
    })
    // return the number (count) of vowels  
    return vowelCount;
  }
  
  // aloha => 3