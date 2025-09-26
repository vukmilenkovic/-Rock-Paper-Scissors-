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
    console.log(input);
    // Set the human choice to lower case
    return input
}

// Variables that track the human and computer scores
let humanScore = 0;
let computerScore = 0;




// Game Logic
// the game will be played round by round 
// Function that takes human and computer choice as arguments, plays a single round, increments the round winner's score and logs winner announcment
function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    // Get the DOM element that displays current hand
    document.querySelector(".human-current").textContent = humanChoice;
    document.querySelector(".computer-current").textContent = computerChoice;
    // Combination for user winning
    if(humanChoice == "rock" && computerChoice == 'scissors' || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You won this round! +1");
        document.querySelector('.message').textContent = "You won this round! +1";
        humanScore += 1;
        document.querySelector('.human-score').textContent = humanScore;
        console.log("Your score is " + humanScore);
        console.log("Computer score is " + computerScore);
        return 
    } // Combination for computer winning
    else if (humanChoice == "rock" && computerChoice == 'paper' || humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock"){
        console.log("Robot won this round! +1");
        document.querySelector('.message').textContent = "The machine won this round! +1";
        computerScore += 1;
        document.querySelector('.computer-score').textContent = computerScore;
        console.log("Your score is " + humanScore);
        console.log("Computer score is " + computerScore);
        return 
    } // Print out that it's a tie
    else {
        console.log("It's a tie, don't give up,  you can beat the machine! Just like in slots :)")
        document.querySelector('.message').textContent = "It's a tie, don't give up,  you can beat the machine! Just like in slots :)";
    }
}

// Function  that will reset the dom, the values, and the game
function gameOver(){
    const gameContainer = document.querySelector('.game-container')
    gameContainer.style.backgroundColor = 'red';
}

// Anounce the winner 
    if (humanScore == 3 ){
    console.log("Human won, better luch next time bot!");
    document.querySelector('.message').textContent = "Human won, better luch next time bot!";
    gameOver();
    } else if (computerScore == 3){
    console.log("Robot won, how can you allow this?")
    document.querySelector('.message').textContent = "Robot won, how can you allow this?";
    gameOver();
    }

// Invoke the playRound() function when the user types in a text and presses enter
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      playRound();
    }
  });
});


