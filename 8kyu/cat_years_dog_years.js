// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// my solution
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = humanYears; i > 0; i--){
      if (i === humanYears){
        catYears += 15;
        dogYears += 15;
      } else if (i === humanYears - 1){
        catYears += 9;
        dogYears += 9;
      } else {
        catYears += 4;
        dogYears += 5;
      }
    }
    
    return [humanYears,catYears,dogYears]; 
  }
  
// P - a number greater than  and a whole number
// R - array of humanYears, calculated catYears, and calculated dogYears
// E - 2 => [2,24,24]
// P - Loop: subtract 1 from humanYears and add 15 to catYears & dogYears for first year. Then run lopp again, subtract 1 from humanYears, add 9 to catYears & dogYears for 2nd year. If humanYears is still greater than 0, run loop again adding 4 to catYears (5 to dogyears) until humanYears is no longer greater than 0. return array of humanYears, catYears, dogYears
  