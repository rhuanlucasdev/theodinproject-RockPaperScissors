let humanScore = 0;
let cpuScore = 0;
let isLastGameFinished = false;

const hScore = document.querySelector(".humanScore");
const cScore = document.querySelector(".cpuScore");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function(event) {
    if (!["Rock", "Paper", "Scissors"].includes(event.target.className)) return;

    let cpuChoice = getComputerChoice();
    let humChoice = event.target.className;

    if (isLastGameFinished) {
        resetGame();
    }

    playRound(humChoice, cpuChoice);
});

function playRound(humChoice, cpuChoice) {
    let result;
    const resultDiv = document.querySelector("#results");
    const curResult = document.createElement("p");
    const picksStr = `You picked ${humChoice} and the Computer picked ${cpuChoice}.`;

    if (humChoice === cpuChoice) {
        result = "tie";
    } else if (
        (humChoice === "Rock" && cpuChoice === "Scissors") ||
        (humChoice === "Paper" && cpuChoice === "Rock") ||
        (humChoice === "Scissors" && cpuChoice === "Paper")
    ) {
        result = "human";
        humanScore++;
    } else {
        result = "computer";
        cpuScore++;
    }

    curResult.textContent = result === "tie" ? `It's a tie. ${picksStr}` : 
        result === "human" ? `You won! ${picksStr}` : `You lost. ${picksStr}`;

    resultDiv.appendChild(curResult);
    hScore.textContent = humanScore;
    cScore.textContent = cpuScore;

    if (humanScore === 5 || cpuScore === 5) {
        const finalResult = document.createElement("p");
        finalResult.textContent = humanScore === 5 ? "You won the game!" : "You lost the game...";
        resultDiv.appendChild(finalResult);
        isLastGameFinished = true;
    }
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function resetGame() {
    const resultDiv = document.querySelector("#results");
    while (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }
    humanScore = 0;
    cpuScore = 0;
    hScore.textContent = humanScore;
    cScore.textContent = cpuScore;
    isLastGameFinished = false;
}
