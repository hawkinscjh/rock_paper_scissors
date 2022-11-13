
function getComputerChoice() {
    
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
};

function playRound( playerSelection, computerSelection ) {

    let winner = "Nobody"
    
    if ( playerSelection.toLowerCase() == computerSelection.toLowerCase() ) {
        console.log("Tie game!");
    }

    else if ( playerSelection.toLowerCase() == "rock" ) {
        if ( computerSelection.toLowerCase() == "paper" ) {
            console.log("Computer Wins! Paper covers Rock!")
            winner = "Computer";
        }
        else {
            console.log("Player Wins! Rock Beats Scissors!")
            winner = "Player";
        };
    }

    else if ( playerSelection.toLowerCase() == "paper" ) {
        if ( computerSelection.toLowerCase() == "scissors" ) {
            console.log("Computer Wins! Scissors cuts Paper!")
            winner = "Computer";
        }
        else {
            console.log("Player Wins! Paper covers Rock!")
            winner = "Player";
        };
    }

    else if ( playerSelection.toLowerCase() == "scissors" ) {
        if ( computerSelection.toLowerCase() == "rock" ) {
            console.log("Computer Wins! Rock beats Scissors!")
            winner = "Computer";
        }
        else {
            console.log("Player Wins! Scissors cuts Paper!")
            winner = "Player";
        };
    };

    return winner;

};

function game() {
    console.log("Let's Play Rock Paper Scissors!");
    console.log("Best score out of 5 rounds wins");
    let computerScore = 0;
    let playerScore = 0;

    for (let i=0; i < 5; i++) {
        console.log(`Round ${i}`);
        console.log(`Player Score ${playerScore} vs Computer Score ${computerScore}`);
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper or Scissors?")
        let winner = playRound( playerSelection, computerSelection );
        if ( winner == "Nobody" ) {
            i--;
        }
        else if ( winner == "Player" ) {
            playerScore++;
        }
        else if ( winner == "Computer" ) {
            computerScore++;
        }
    };

    if ( playerScore > computerScore ) {
        console.log("Good job, Player Wins!");
    }
    else {
        console.log("Tough game, Computer Wins!");
    };
};

console.log(game());