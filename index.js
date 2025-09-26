// Function that randomly returns one of the following values "rock", "paper", "scissors"
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
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
    console.log(humanChoice);
    console.log(computerChoice);
    // Combination for user winning
    if(humanChoice == "rock" && computerChoice == 'scissors' || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You won this round! +1");
        humanScore += 1;
        console.log("Your score is " + humanScore);
        console.log("Computer score is " + computerScore);
        return 
    } // Combination for computer winning
    else if (humanChoice == "rock" && computerChoice == 'paper' || humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock"){
        console.log("Robot won this round! +1");
        computerScore += 1;
        console.log("Your score is " + humanScore);
        console.log("Computer score is " + computerScore);
        return 
    } // Print out that it's a tie
    else {
        console.log("It's a tie, don't give up,  you can beat the machine! Just like in slots :)")
    }
    
}



// TODO: Make the game logic so that it keeps track of the score revokes the playRound function.
while(humanScore  < 3 && computerScore < 3) {
   playRound();
}


// Anounce the winner 
if (humanScore == 3 ){
console.log("Human won, better luch next time bot!");
} else if (computerScore == 3){
console.log("Robot won, how can you allow this?")
}

