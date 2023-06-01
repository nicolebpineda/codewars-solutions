// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// My solution
// two sides of a polygon
const areaOrPerimeter = function(l , w) {
    // if the numbers are the same, it's a square
    if (l == w){ 
      // multiple them and return the answer
      return l * w
    }
    // otherwise, it's a rectangle.
    else { 
      // add the two sides together then double it. 
      return (l + w) * 2
    }
};
  
// 4, 3 => 14
// 2, 2 => 4


// My Reworked Soultion
// two sides of a polygon
const areaOrPerimeter2 = function(l , w) {
    // If the numbers are the same, it's a square. Multiple them and return the answer
    // Otherwise, it's a rectangle. Add the two sides together then double it. 
    return (l == w) ? (l * w) : (l + w) * 2
};
  
// 4, 3 => 14
// 2, 2 => 4