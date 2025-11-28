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

    const winsAgainst = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    const buttons = document.querySelectorAll('.btn');
    let currentPlayer = 1;

    buttons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            if (currentPlayer === 1){
                let player1 = btn.textContent;
                console.log("Player 1 choice is ", player1);
            } else {
                let player2 = btn.textContent;
                console.log("Player 2 choice is : ",  player2);
            }
            
            currentPlayer =  currentPlayer === 1 ? 2 : 1;
            event.preventDefault();
        })
    })



// Game Logic
// the game will be played round by round 
// Function that takes human and computer choice as arguments, plays a single round, increments the round winner's score and logs winner announcment
function playRound(choice1, choice2){
    console.log("Play Round was invoked.");
    if (choice1 === choice2) return "tie";

    if (winsAgainst[choice1] === choice2) {
        return "player1";
    }

    return "player2";
   
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
// document.addEventListener('DOMContentLoaded', () => {
//   document.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//       playRound();
//     }
//   });
// });


