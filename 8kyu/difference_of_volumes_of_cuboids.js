// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

// My soluiton
// Take in two arrays, each with three numbers
function findDifference(a, b) {
    // Multiply each number together in list a and in b, then subtract b from a
    // Return absolute value of the difference 
    return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
}
  
// [2, 2, 2], [3, 3, 3] => 19 (27 - 8 = 19)