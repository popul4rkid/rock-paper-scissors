



function getComputerChoice(){
    const rps = ["rock" , "paper" , "scissor"];
    const choice = Math.floor(Math.random() * rps.length);
    const response = rps[choice];
    return response
};

console.log(getComputerChoice())


