const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const results = document.getElementById("results");
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const restartGameBtn = document.getElementById("restart");
const winningScore = 10;
let computerMove;
let playerScores = 0;
let computerScores = 0;
// let playerMove;
function updateScores() {}

function generateComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerMove = "rock";
  } else if (randomNumber === 2) {
    computerMove = "paper";
  } else if (randomNumber === 3) {
    computerMove = "scissors";
  }
}
function compareResults() {
  if (computerMove === playerMove) {
    results.textContent = `It is a tie 😲`;
    playerChoice.textContent = `You chose ${playerMove}`;
    computerChoice.textContent = `computer chose ${computerMove}`;
    playerScores;
    computerScores;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    results.textContent = "You won😄✅";
    playerChoice.textContent = `You chose ${playerMove}`;
    computerChoice.textContent = `computer chose ${computerMove}`;
    playerScores++;
    computerScores + 0;
    playerScore.textContent = playerScores;
  } else {
    results.textContent = "Computer won😢";
    playerChoice.textContent = `You chose ${playerMove}`;
    computerChoice.textContent = `computer chose ${computerMove}`;
    computerScores++;
    computerScore.textContent = computerScores;
  }

  checkWinner();
}
function checkWinner() {
  if (playerScores === winningScore) {
    results.textContent = "You won🎉";
    disableGame();
  } else if (computerScores === winningScore) {
    results.textContent = "Computer won😣";
    disableGame();
  }
}
function disableGame() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}
function restartGame() {
  playerScores = 0;
  computerScores = 0;
  playerScore.textContent = playerScores;
  computerScore.textContent = computerScores;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  results.textContent = "";
}

restartGameBtn.addEventListener("click", function () {
  restartGame();
});

// function checkupWins(){
//   if()
// }
rock.addEventListener("click", function () {
  playerMove = "rock";
  generateComputerMove();
  compareResults();
});
paper.addEventListener("click", function () {
  playerMove = "paper";
  generateComputerMove();
  compareResults();
});
scissors.addEventListener("click", function () {
  playerMove = "scissors";
  generateComputerMove();
  compareResults();
});