const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

function playRound(playerSelection, computerSelection) {
    let refinedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (refinedPlayerSelection != computerSelection) {
        if (refinedPlayerSelection === "Rock" && computerSelection === "Paper") {
            return console.log("Paper beats rock, you lose");
        }

        else if (refinedPlayerSelection === "Rock" && computerSelection === "Scissors") {
            return console.log("Rock beats scissors, you win");
        }

        else if (refinedPlayerSelection === "Rock" && computerSelection === "Paper") {
            return console.log("Paper beats rock, you lose");
        }

        else if (refinedPlayerSelection === "Paper" && computerSelection === "Scissors") {
            return console.log("Scissors beats Paper, you lose");
        }

        else if (refinedPlayerSelection === "Paper" && computerSelection === "Rock") {
            return console.log("Paper beats rock, you win");
        }

        else if (refinedPlayerSelection === "Scissors" && computerSelection === "Rock") {
            return console.log("Rock beats scissors, you lose");
        }

        else if (refinedPlayerSelection === "Scissors" && computerSelection === "Paper") {
            return console.log("Scissors beats paper, you win");
        }
    }

    else {
        return console.log("Draw");
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
