// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// my solution
const rps = (p1, p2) => {
    let player1won = "Player 1 won!"
    let player2won = "Player 2 won!" 
    let draw = "Draw!"
    
    if (p1 === p2) {
      return draw
    } else if ((p1 === 'scissors' && p2 === 'paper') || ( p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors')){
      return player1won
    } else {
      return player2won
    }
    
  };
  