const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getId() {
  return Math.floor(Math.random() * 3) + 1;
}

function computerPlay() {
  const currentId = getId();
  if (currentId === 0) {
    return paper;
  }

  if (currentId === 1) {
    return scissors;
  }

  return rock;
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return "Computer Wins! Paper beats Rock!";
    }
    if (computerSelection === "Scissors") {
      return "You Win. Rock beats scissors!";
    }

    return "Draw!";
  }

  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return "You win! Paper beats rock!";
    }
    if (computerSelection === "Scissors") {
      return "Computer Wins! Scissors beats paper!";
    }

    return "Draw!";
  }

  if (computerSelection === "Paper") {
    return "You Win! Scissors beats paper!";
  }
  if (computerSelection === "Rock") {
    return "Computer Wins. Rock beats scissors!";
  }

  return "Draw!";
}

function getUserInput() {
  return prompt("Rock, paper or scissors?");
}

function capitalize(sign) {
  return sign.charAt(0).toUpperCase() + sign.slice(1);
}

function normalizePlayerSelection(selection) {
  return capitalize(selection);
}

function validateUserInput(input) {
  if(!input) {
    return false;
  }

  const inputValue = input.toLocaleLowerCase();
  const isRock = inputValue.includes("rock");
  const isPaper = inputValue.includes("paper");
  const isScissors = inputValue.includes("scissors");
  const hasCorrectSign = isRock || isPaper || isScissors;

  return hasCorrectSign
}

function getPlayerSign() {
  const userInput = getUserInput();
  const isUserInputValid = validateUserInput(userInput);

  if(userInput && isUserInputValid) {
    const normalizedInput = normalizePlayerSelection(userInput);
    return normalizedInput;
  }

  return;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = getPlayerSign();
    if(!playerSelection) {
      window.alert("Sorry wrong input, refresh and try again");
      break; 
    }
    console.log(playRound(playerSelection, computerSelection));
  }
}

playGame()