



function getComputerChoice(){
    const rps = ["rock" , "paper" , "scissor"];
    const choice = Math.floor(Math.random() * 3);
    return rps[choice]
};


// returns rock, paper, scissor at random

let playerScore = 0
let compScore = 0


function playRound(playerSelection, compSelection){
    if (playerSelection.toLowerCase() === 'rock' && compSelection === 'rock'){
        return 'Welp, you tied'
    } else if (playerSelection.toLowerCase() === 'paper' && compSelection === 'paper'){
        return 'Welp, you tied'
    } else if (playerSelection.toLowerCase() === 'scissor' && compSelection === 'scissor'){
        return 'Welp, you tied'
    } else if (playerSelection.toLowerCase() === 'rock' && compSelection === 'scissor'){
        playerScore++;
        return 'Rock destroys scissors, you\'ve won' 
    } else if (playerSelection.toLowerCase() === 'rock' && compSelection === 'paper' ){
        compScore++;
        return 'Paper beats rock, try again'
    } else if (playerSelection.toLowerCase() === 'paper' && compSelection === 'scissor'){
        compScore++;
        return 'Scissor beats paper, try again'
    } else if (playerSelection.toLowerCase() === 'paper' && compSelection === 'rock'){
        playerScore++;
        return 'Paper beats rock, you win'
    } else if (playerSelection.toLowerCase() === 'scissor' && compSelection === 'rock'){
        compScore++;
        return 'Rock destroys scissors, try again'
    } else if (playerSelection.toLowerCase() === 'scissor' && compSelection === 'paper'){
        playerScore++;
        return 'Scissors beats paper, you win'
    }
    
}

// establishes the rules of the game between the player selection and computer selection
// score is kept track after each function return

function result(){
    if (playerScore > compScore){
        alert('You win!!!!!')
        
    } else if (playerScore < compScore){
        alert("You lose, try again")
    }
}

function game() {
    do {
        let playerSelection = prompt('rock, paper, scissors')
        let compSelection = getComputerChoice();
        playRound(playerSelection, compSelection);
        console.log("Player:")
        console.log(playerScore)
        console.log("Comp:")
        console.log(compScore)
} while (playerScore < 5 && compScore < 5)
    return result()
}

console.log(result())
/*

for (int i = 0; i < 5; i++) {

}

do {
        let playerSelection = prompt('rock, paper, scissors')
        let compSelection = getComputerChoice();
        playRound(playerSelection, compSelection);
        console.log("Player:")
        console.log(playerScore)
        console.log("Comp:")
        console.log(compScore)
} while (playerScore && compScore < 5)




function game() {
    do {
        let playerSelection = prompt('rock, paper, scissors')
        let compSelection = getComputerChoice();
        playRound(playerSelection, compSelection);
        console.log("Player:")
        console.log(playerScore)
        console.log("Comp:")
        console.log(compScore)

    }
    return result()


*/
console.log(result)
// game is initialized; player input is demanded via prompt and computer selection is demanded via previous called function. 
// this is looped 5 times


game()



