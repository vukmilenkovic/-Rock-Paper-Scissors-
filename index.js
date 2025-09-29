// Function that randomly returns one of the following values "rock", "paper", "scissors"
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function that takes user input and returns it 
function getHumanChoice(){
    // USe prompt to get the user inpurt 
    let input = document.querySelector('.user-input').value;
    // Set the human choice to lower case
    return input
}

// Define the scores
let humanScore = 0;
let computerScore = 0;

// Game Logic
// the game will be played round by round 
// Function that takes human and computer choice as arguments, plays a single round, increments the round winner's score and logs winner announcment
function playRound(){
    // Define choices
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    // Get the DOM element that displays current hand
    document.querySelector(".human-current").value = humanChoice;
    document.querySelector(".computer-current").value = computerChoice;
    // Combination for user winning
    if(humanChoice == "rock" && computerChoice == 'scissors' || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        document.querySelector('.message').textContent = "You won this round! +1";
        humanScore += 1;
        document.querySelector('.human-score').textContent = humanScore;
    } // Combination for computer winning
    else if (humanChoice == "rock" && computerChoice == 'paper' || humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock"){
        document.querySelector('.message').textContent = "The machine won this round! +1";
        computerScore += 1;
        document.querySelector('.computer-score').textContent = computerScore;
    } // Print out that it's a tie
    else {
        document.querySelector('.message').textContent = "It's a tie, don't give up,  you can beat the machine! Just like in slots :)";
    }
    // Check for winner
    if (humanScore == 3 ) {
        document.querySelector('.message').textContent = "Human won, better luch next time bot!";
        gameOver("Human won, better luck next time bot!");
    } else if (computerScore == 3) {
        document.querySelector('.message').textContent = "Robot won, how can you allow this?";
        gameOver("Robot won, how can you allow this?");
    }
}

// Function  that will reset the dom, the values, and the game
function gameOver(winnerMessage){
    const gameContainer = document.querySelector('.game-container');
    // Clear the current HTML document
    gameContainer.innerHTML = '';

    // Create a new mwssage element
    const message = document.createElement('h1');
    message.textContent = "Game Over!"
    message.style.color = "white";

    // Create a heading for the winner
    const wMessage = document.createElement('h4');
    wMessage.textContent = winnerMessage; // dynamic message
    wMessage.style.color = 'white';
    wMessage.style.marginBottom = '20px';

    // Create a restart button
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Play Again';
    restartBtn.classList.add('restart-btn');

    // Add an event listener to the new button
    restartBtn.addEventListener('click', () => {
        console.log('Game restarted!');
        window.location.reload();
    });
    // Append new elements to the container
    gameContainer.appendChild(message);
    gameContainer.appendChild(restartBtn);
    gameContainer.appendChild(wMessage); 
    // Change container style
    Object.assign(gameContainer.style, {
        backgroundColor: 'red',
        padding: '20px',
        textAlign: 'center',
        width: '500px',
        height: '500px'
    });

}



// Invoke the playRound() function when the user types in a text and presses enter
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      playRound();
    }
  });
});


