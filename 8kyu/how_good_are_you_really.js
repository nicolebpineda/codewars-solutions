// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// My solution
// Take in two values: one array of numbers and a number
function betterThanAverage(classPoints, yourPoints) {
    // Add yourPoints to classPoints array
    classPoints.push(yourPoints)
    
    // Calculate class average 
    let classAverage = classPoints.reduce((acc, c) => acc + c) / (classPoints.length + 1)
    
    // Return true or false if yourPoints is greater or less than the class average
    return classAverage < yourPoints ? true : false
}
  
// [90, 67, 80, 55], 87 => true (76 average)
// [98, 77, 95, 81], 80 => false (86 average)
  