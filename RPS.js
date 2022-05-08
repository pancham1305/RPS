const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("Result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let compChoice;
let result;
possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice;
    generateComputerChoice();
    getResult();
  });
});
const generateComputerChoice = () => {
  const ran = Math.floor(Math.random() * 3) + 1;
  if (ran === 1) {
    compChoice = "scissor";
  }
  if (ran === 2) {
    compChoice = "rock";
  }
  if (ran === 3) {
    compChoice = "paper";
  }
  computerChoiceDisplay.textContent = compChoice;
};

// comp choice define krni hai

function getResult() {
  if (compChoice === userChoice) {
    result = "Draw";
  } else if (compChoice === "rock" && userChoice === "paper") {
    result = "you win!";
  } else if (compChoice === "rock" && userChoice === "scissor") {
    result = "you lost!";
  } else if (compChoice === "paper" && userChoice === "rock") {
    result = "you lost!";
  } else if (compChoice === "paper" && userChoice === "scissor") {
    result = "you win!";
  } else if (compChoice === "scissor" && userChoice === "paper") {
    result = "you lost!";
  } else if (compChoice === "scissor" && userChoice === "rock") {
    result = "you win!";
  }
  resultDisplay.textContent = result;
}
