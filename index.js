// Function that randomly returns one of the following values "rock", "paper", "scissors"
function getComputerChoice(){
    const rock = "rock"
    const paper = "paper"
    const scissors = "scissors"

    // Generate a random number between 1 and 3 
    let randomNum = Math.floor(Math.random() * 3) + 1

    // Connect the random number to the appropriate variables
    if (randomNum == 1){
        console.log(rock)
        return rock
    } else if (randomNum == 2){
        console.log(paper)
        return paper
    } else if (randomNum == 3) {
        console.log(rock)
        return rock
    }
    
}

// Function that takes user input and returns it 
function getHumanChoice(){
    // USe prompt to get the user inpurt 
    let input = prompt("Please choice what symbol you will use: ROCK, PAPER OR SCISSORS")
    // Set the human choice to lower case
    return input.toLowerCase();
}

// Variables that track the human and computer scores
let humanScore = 0;
let computerScore = 0;

// Game Logic
// the game will be played round by round 
// Function that takes human and computer choice as arguments, plays a single round, increments the round winner's score and logs winner announcment
function playRound(humanChoice, computerChoice){
    // Check if the values are equals, if equal it's a draw
    if (humanChoice == computerChoice){
        return "It's a draw!"
    } else if (humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore += 1
        console.log(humanChoice, computerChoice)
        console.log("Human wins")
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1
        console.log(humanChoice, computerChoice)
        console.log("Human wins")
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1
        console.log(humanChoice, computerChoice)
        console.log("Human wins")
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// TODO: Make the game logic so that it keeps track of the score revokes the playRound function.


