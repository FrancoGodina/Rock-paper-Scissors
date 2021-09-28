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
  
const div = document.createElement("div");
const score = document.createElement("score");

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
    div.textContent = "tie";
    }
    else if (
          (playerSelection === "rock" && computerSelection === "scissors") ||
          (playerSelection === "paper" && computerSelection === "rock") ||
           (playerSelection === "scissors" && computerSelection === "paper")) {
             playerScore ++;
            div.textContent = "You win! " + playerSelection + " beats " + computerSelection;
    }
     else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
         computerScore ++;
         div.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        }
      
  evaluateScore();
}
results.appendChild(div);

const endgame = document.createElement("endgame");

function evaluateScore() {
  if (playerScore === 5) {
    endgame.textContent = "HELL YEAH! YOU WON!!!";

  }
  else if (computerScore === 5) {
    endgame.textContent = "DAMN. YOU LOST!";
  }
}
winner.appendChild(endgame);

const btnrock = document.querySelector("#rock");
btnrock.addEventListener("click", () => {
      playRound("rock", computerPlay());
})

const btnpaper = document.querySelector("#paper");
btnpaper.addEventListener("click", () => {
  playRound("paper", computerPlay());
})

const btnscissors = document.querySelector("#scissors");
btnscissors.addEventListener("click", () => {
  playRound("scissors", computerPlay());
})

  
