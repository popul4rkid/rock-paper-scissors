



function getComputerChoice(){
    const rps = ["rock" , "paper" , "scissor"];
    const choice = Math.floor(Math.random() * 3);
    return rps[choice]
};


// returns rock, paper, scissor at random



function playRound(playerSelection, compSelection){
    if (playerSelection.toLowerCase() === 'rock' && compSelection === 'rock'){
        return 'Welp, you tied'
    } else if (playerSelection.toLowerCase() === 'paper' && compSelection === 'paper'){
        return 'Welp, you tied'
    } else if (playerSelection.toLowerCase() === 'scissor' && compSelection === 'scissor'){
        return 'Welp, you tied'
    } else if (playerSelection.toLowerCase() === 'rock' && compSelection === 'scissor'){
        return 'Rock destroys scissors, you\'ve won'
    } else if (playerSelection.toLowerCase() === 'rock' && compSelection === 'paper' ){
        return 'Paper beats rock, try again'
    } else if (playerSelection.toLowerCase() === 'paper' && compSelection === 'scissor'){
        return 'Scissor beats paper, try again'
    } else if (playerSelection.toLowerCase() === 'paper' && compSelection === 'rock'){
        return 'Paper beats rock, you win'
    } else if (playerSelection.toLowerCase() === 'scissor' && compSelection === 'rock'){
        return 'Rock destroys scissors, try again'
    } else if (playerSelection.toLowerCase() === 'scissor' && compSelection === 'paper'){
        return 'Scissors beats paper, you win'
    }
    
}



// establishes the rules of the game between the player selection and computer selection

function game() {
    for (i = 0; i < 5; i++){
        let playerSelection = prompt('rock, paper, scissors')
        let compSelection = getComputerChoice();
        playRound(playerSelection, compSelection);
        console.log(playRound(playerSelection, compSelection))
    }
    
}
// game is initialized; player input is demanded via prompt and computer selection is demanded via previous called function. 
// this is looped 5 times

if ('Welp, you tied' === 3) {
    alert('Welp, you tied')
}

console.log(game())



