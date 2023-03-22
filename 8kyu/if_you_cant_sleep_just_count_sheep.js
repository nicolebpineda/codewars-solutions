// If you can't sleep, just count sheep!!

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// my solution
var countSheep = function (num){
    let message = '';
    let i = 1;
    
    while (i <= num) {
      console.log(message)
      message = message += `${i} sheep...`;
      i++;
    }
    return message
  }
  