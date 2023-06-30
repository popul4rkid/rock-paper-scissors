



function getComputerChoice(){
    const rps = ["rock" , "paper" , "scissor"];
    const choice = Math.floor(Math.random() * 3);
    return rps[choice]
};
// returns rock, paper, scissor at random

function playRound(playerSelection, compSelection){
    if (playerSelection === 'rock' && compSelection === 'rock'){
        return 'Welp, you tied :/'
    } else if (playerSelection === 'paper' && compSelection === 'paper'){
        return 'Welp, you tied'
    } else if (playerSelection === 'scissor' && compSelection === 'scissor'){
        return 'Welp, you tied'
    } else if (playerSelection === 'rock' && compSelection === 'scissor'){
        return 'Rock destroys scissors, you\'ve won'
    } else if (playerSelection === 'rock' && compSelection === 'paper' ){
        return 'Paper beats rock, try again'
    } else if (playerSelection === 'paper' && compSelection === 'scissor'){
        return 'Scissor beats paper, try again'
    } else if (playerSelection === 'paper' && compSelection === 'rock'){
        return 'Paper beats rock, you win'
    } else if (playerSelection === 'scissor' && compSelection === 'rock'){
        return 'Rock destroys scissors, try again'
    } else if (playerSelection === 'scissor' && compSelection === 'paper'){
        return 'Scissors beats paper, you win'
    }

}

// establishes the rules of the game between the player selection and computer selection

function playround(playerSelection, compSelection){

}

const playerSelection = 'rock';
const compSelection = getComputerChoice();

console.log(playRound(playerSelection, compSelection))


