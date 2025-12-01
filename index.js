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
    let player1 = '';
    let player2 = '';

    buttons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            if (currentPlayer === 1){
                player1 = btn.textContent;
                player1 = player1.toLowerCase();
                console.log("Player 1 choice is ", player1);
            } else {
                player2 = btn.textContent;
                player2 = player2.toLowerCase();
                console.log("Player 2 choice is : ",  player2);
            }

            if(player1 !== '' && player2 !== ''){
                playRound(player1, player2);
                // Reset the values after each round
                player1 = '';
                player2 = '';
           }        
            

            
            
            currentPlayer =  currentPlayer === 1 ? 2 : 1;
            event.preventDefault();
        })
    })

// TODO: Keep the track of the score for both players.
function playRound(choice1, choice2){
    console.log("Play Round was invoked.");
    if (choice1 === choice2) return "tie";

    if (winsAgainst[choice1] === choice2) {
        console.log('{layer 1 wins');
        return;
    }
    console.log('Player 2 wins!')
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


