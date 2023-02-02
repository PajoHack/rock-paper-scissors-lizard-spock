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

/**
 * Generates a random computer selection from the array of choices.
 * 
 */
function computerPicks() {

    const picks = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    const random = Math.floor(Math.random() * picks.length);

    return picks[random];
}

/** 
 * Returns uppercase word used in the win, lose
 * draw functions.
 */
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

/**  
 * Increments the player score and displays the "You WIN!" statement on the 
 * screen in the result div. Also adds and then removes the "green-glow" class on 
 * the selected icon.
 */
function win(userChoice, ComputerChoice) {

    playerScore++;

    playerScoreSpan.innerHTML = playerScore;
    ComputerScoreSpan.innerHTML = computerScore;

    resultDiv.innerHTML = `${capitalLetters(userChoice)} beats ${capitalLetters(ComputerChoice)}. You WIN! &#128512;`;

    document.getElementById(userChoice).classList.add("green-glow"); // grab whichever icon the player selects and add green-glow class to it.
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 1250); // remove the class after the set time-out.

}

/**  
 * Increments the computer score and displays the "You LOST!" statement on the 
 * screen in the result div. Also adds and then removes the "red-glow" class on 
 * the selected icon.
 */
function lose(userChoice, ComputerChoice) {
    computerScore++;

    playerScoreSpan.innerHTML = playerScore;
    ComputerScoreSpan.innerHTML = computerScore;

    resultDiv.innerHTML = `${capitalLetters(userChoice)} loses to ${capitalLetters(ComputerChoice)}. You LOST! &#128548;`;

    document.getElementById(userChoice).classList.add("red-glow"); // grab whichever icon the player selects and add red-glow class to it.
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 1250); // remove the class after the set time-out.
}

/**  
 * Displays "It's a DRAW!" in the result div.
 */
function draw(userChoice, ComputerChoice) {

    playerScoreSpan.innerHTML = playerScore;
    ComputerScoreSpan.innerHTML = computerScore;

    resultDiv.innerHTML = `${capitalLetters(userChoice)} ties with ${capitalLetters(ComputerChoice)}. It's a DRAW! &#128530;`;
}

/**  
 * Switch construct containing ever possible outcome of the game.
 */
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

/**  
 * Event listeners for when the player clicks on one of the icons.
 */
function mainGame() {

    rockDiv.addEventListener('click', function() {
        game("rock");
    });
    
    paperDiv.addEventListener('click', function() {
        game("paper");
    });
    
    scissorsDiv.addEventListener('click', function() {
        game("scissors");
    });
    
    lizardDiv.addEventListener('click', function() {
        game("lizard");
    });
    
    spockDiv.addEventListener('click', function() {
        game("spock");
    });

}

mainGame();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  
