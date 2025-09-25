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
    console.log(input)
}

