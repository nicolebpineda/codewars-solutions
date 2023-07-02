// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// My soluiton
// Take in two numbers, classmate count, and paperwork count
// Mulitply classmate count by paperwork count to get count of blank pages needed 
// If classmate count or paperwork count are less than 0, return 0
// Return number of blank pages need to copy paperwork for all students
let paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m

// classmate count = 2, paperwork count = 4 => 8 
// classmate count = 4, paperwork count = -1 => 0
