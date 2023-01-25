let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player-score");
const ComputerScoreSpan = document.getElementById("computer-score");

const scoresDiv = document.querySelector(".scores-div");
const resultDiv = document.querySelector(".result > p");

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const lizardDiv = document.getElementById("lizard");
const spockDiv = document.getElementById("spock");

function computerPicks() {

    const picks = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    const random = Math.floor(Math.random() * picks.length);

    return picks[random];
}

function capitalLetters(word){

    if (word === "rock") {
        return "ROCK";
    } else if (word === "paper") {
        return "PAPER";
    } else if (word === "scissors") {
        return "SCISSORS";
    } else if (word === "lizard") {
        return "LIZARD";
    } else {
        return "SPOCK";
    }
    
}

function win(userChoice, ComputerChoice) {

    playerScore++;

    playerScoreSpan.innerHTML = playerScore;
    ComputerScoreSpan.innerHTML = computerScore;

    resultDiv.innerHTML = `${capitalLetters(userChoice)} beats ${capitalLetters(ComputerChoice)}. You WIN! &#128512;`;

}

function lose(userChoice, ComputerChoice) {
    console.log("LOSE");
}

function draw(userChoice, ComputerChoice) {
    console.log("DRAW");
}

function game(userChoice) {

    const getComputerPick = computerPicks();

    switch (userChoice+getComputerPick) {

        case "scissorspaper":
        case "paperrock":
        case "rocklizard":
        case "lizardspock":
        case "spockscissors":
        case "scissorslizard":
        case "lizardpaper":
        case "paperspock":
        case "spockrock":
        case "rockscissors":
            win(userChoice, getComputerPick); 
            break;

        case "paperscissors":
        case "rockpaper":
        case "spocklizzard":
        case "spocklizard":
        case "scissorsspock":
        case "lizardscissors":
        case "paperlizard":
        case "spockpaper":
        case "rockspock":
        case "scissorsrock":
            lose(userChoice, getComputerPick); 
            break;

        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw(userChoice, getComputerPick);
            break;

    }
    
}

function mainGame() {

    rockDiv.addEventListener('click', function() {
        game("rock");
    })
    
    paperDiv.addEventListener('click', function() {
        game("paper");
    })
    
    scissorsDiv.addEventListener('click', function() {
        game("scissors");
    })
    
    lizardDiv.addEventListener('click', function() {
        game("lizard");
    })
    
    spockDiv.addEventListener('click', function() {
        game("spock");
    })

}

mainGame();