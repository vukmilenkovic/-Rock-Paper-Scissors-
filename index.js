// Function that randomly returns one of the following values "rock", "paper", "scissors"
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
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
function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    // After each round reset the values for human and computer choices
    // Check if the values are equals, if equal it's a draw
    if (humanChoice == computerChoice){
        return "It's a draw!"
    } else if (humanChoice == 'paper' && computerChoice == 'rock'){
        console.log(humanChoice, computerChoice)
        console.log("Human wins")
        return humanScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log(humanChoice, computerChoice)
        console.log("Human wins")
        return humanScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log(humanChoice, computerChoice)
        console.log("Human wins")
        return humanScore += 1;
        
    }
    else {
        console.log("Robot won this round!")
        return computerScore += 1;

    }
}



// TODO: Make the game logic so that it keeps track of the score revokes the playRound function.
// while(humanScore  < 3 || computerScore < 3) {
//     playRound(humanChoice, computerChoice)
// }

// Anounce the winner 
// if (humanScore == 3 ){
//     console.log("Human won, better luch next time bot!");
// } else if (computerScore == 3){
//     console.log("Robot won, how can you allow this?")
// }

