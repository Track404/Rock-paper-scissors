function getComputerChoice() {
    all_choice = ["rock","paper","scissors"];
    index =Math.floor(Math.random()*all_choice.length);
    ChoiceComputer= all_choice[index];

    return ChoiceComputer;
}


function PlayRound(player_choice, computerChoice) {
    let player =0;
    let computer=0;
    
    if (player_choice == "rock" && computerChoice =="scissors"){
    result ="You Win! Rock beats Scissors";
    
    }
    else if(player_choice == "paper" && computerChoice =="rock"){
        result ="You Win! Paper beats Rock";

    }
    else if(player_choice == "scissors" && computerChoice =="paper"){
        result ="You Win! Scissors beats Paper";
    }
    else if(player_choice == computerChoice){
        result= "it's a draw";
    }
    else { 
        result= `You Lose! ${player_choice} beats ${computerChoice}`}
return result
}


let i=0;
let playerSelection = "rock"
let computerSelection = getComputerChoice()
console.log(playerSelection)
console.log(computerSelection);


console.log(PlayRound(playerSelection,computerSelection));

