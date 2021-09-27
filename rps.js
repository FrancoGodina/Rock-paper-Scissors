function computerPlay() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}
function playerPlay(){
    let playerAction = prompt("rock, paper, scissors?")
    let playerSelection = playerAction.toLowerCase();
    
    return playerSelection;
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
    console.log("tie");
    }
    else if (
          (playerSelection === "rock" && computerSelection === "scissors") ||
          (playerSelection === "paper" && computerSelection === "rock") ||
          (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore ++;
            console.log("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if (
       (playerSelection === "rock" && computerSelection === "paper") ||
       (playerSelection === "paper" && computerSelection === "scissors") ||
       (playerSelection === "scissors" && computerSelection === "rock")) {
         computerScore ++;
         console.log("You lose! " + computerSelection + " beats " + playerSelection);
       }
      }
  
function game() {
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  playRound(playerPlay(), computerPlay());
  if (playerScore == computerScore) {
    console.log("OH NO! IT'S A TIE");
  }
  else if (playerScore > computerScore) {
    console.log("HELL YEAH! YOU WON!!!");
  }
  else if (playerScore < computerScore) {
    console.log("DAMN. YOU LOST!");
  }
}
  
  console.log(game())   