// GAME
const array = ["Rock", "Paper", "Scissors"];
let myScore = 0;
let cpScore = 0;


function getComputerChoice() {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

function playRound(playerSelection, computerSelection) {
    let refinedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (refinedPlayerSelection != computerSelection) {
        if (refinedPlayerSelection === "Rock" && computerSelection === "Paper") {
            cpScore++;
            return "Paper beats rock, you lose";
           }

        else if (refinedPlayerSelection === "Rock" && computerSelection === "Scissors") {
            myScore++;
            return "Rock beats scissors, you win";
        }

        else if (refinedPlayerSelection === "Paper" && computerSelection === "Rock") {
            myScore++;
            return "Paper beats rock, you win";
        }

        else if (refinedPlayerSelection === "Paper" && computerSelection === "Scissors") {
            cpScore++;
            return "Scissors beats Paper, you lose";
        }

        else if (refinedPlayerSelection === "Scissors" && computerSelection === "Rock") {
            cpScore++;
            return "Rock beats scissors, you lose";
        }

        else if (refinedPlayerSelection === "Scissors" && computerSelection === "Paper") {
            myScore++;
            return "Scissors beats paper, you win";
        
        }
    }

    else {
        return "Draw";
    }
}


function game(playerSelection) {
    // for (let i = 0; i < 5; i++) {
        
    // }
    // let playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
    if (cpScore === 5 || myScore === 5) {
        document.querySelectorAll('button').forEach(button => {
            button.removeEventListeners('click', gameLogicHandler);
        });
        
        const finalResult = document.createElement('div');
        finalResult.textContent = 'You have reached maximum wins/loses';
        document.body.appendChild(finalResult);
        return;
    }

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    
    const resultDisplay = document.getElementById('result');
    resultDisplay.textContent = result;

    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Player: ${myScore} - Computer: ${cpScore}`;

    
}

// UI
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';

function gameLogicHandler(event) {
    const playerSelection = event.target.textContent;
    game(playerSelection);
}


rockBtn.addEventListener('click', gameLogicHandler);

paperBtn.addEventListener('click', gameLogicHandler);

scissorsBtn.addEventListener('click', gameLogicHandler);

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);

// displays results and scores
const resultDiv = document.createElement('div');
resultDiv.setAttribute('id', 'result');
document.body.appendChild(resultDiv);

const scoreDiv = document.createElement('div');
scoreDiv.setAttribute('id', 'score');
document.body.appendChild(scoreDiv);



