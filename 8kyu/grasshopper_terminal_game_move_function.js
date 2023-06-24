// Terminal game move function

// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

// My solution
// Take in two numbers, current hero position and dice roll
function move (position, roll) {
    // Add dice roll to current position twice to get new position
    let newPosition = position + (roll * 2)
    // Return hero's new position
    return newPosition
}
  
// (2, 1) => 4
// (4, 5) => 14
  