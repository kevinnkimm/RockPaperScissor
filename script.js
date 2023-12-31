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


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
    
    if (myScore < cpScore) {
        console.log(`Computer wins with a ${cpScore} points over ${myScore} points`);
    }
    else if (myScore > cpScore) {
        console.log(`Player wins with a ${myScore} points over ${cpScore} points`);

    }
    else {
        console.log(`draw with a ${myScore} points over ${cpScore} points`);
    }
    
    
}

game();
