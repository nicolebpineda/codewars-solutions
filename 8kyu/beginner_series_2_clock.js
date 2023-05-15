// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// my solution
function past(h, m, s){
    let timeInMilliseconds = 0;
    let x = 0;
    let y = 0;
    let z = 0;
    while (x < h){
      timeInMilliseconds += 3600000;
      x++;
    }
    while (y < m){
      timeInMilliseconds += 60000;
      y++;
    }
    while (z < s){
      timeInMilliseconds += 1000;
      z++;
    }
    return timeInMilliseconds;
}
  
// P - hour, minutes and seconds since midnight
// R - the time in miliseconds
// E - h=1, m=0, s=1 => 3,601,000
// P - need single value to return, need iterator, need to add to the value while iterator is under parameter
