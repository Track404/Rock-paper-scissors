function getComputerChoice() {
    all_choice = ["rock","paper","scissors"];
    index =Math.floor(Math.random()*all_choice.length);
    ChoiceComputer= all_choice[index];

    return ChoiceComputer;
}


function PlayRound(player_choice, computerChoice) {
    
    let player=0;
    let computer=0;
    if (player_choice == "rock" && computerChoice =="scissors"||
        player_choice == "paper" && computerChoice =="rock"||
        player_choice == "scissors" && computerChoice =="paper"){
    result =`You Win! ${player_choice} beats ${computerChoice}`;
    player++;
    }
    else if(player_choice == computerChoice){
        result= "it's a draw";
    }
    else { 
        result= `You Lose! ${player_choice} beats ${computerChoice}`;
        computer++;
    }
return result
}
let player=0;
let computer=0;
let numberOfRound =0;
let tablescore =[player, computer];
let playerSelection = "rock";


while(numberOfRound<5){
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(PlayRound(playerSelection,computerSelection));
    numberOfRound+=1;
    
}
 if(tablescore[0]>tablescore[1]){
    console.log("player win");
 }
 else if( tablescore[0]<tablescore[1]){
    console.log("computer win");
 }
 else{
    console.log("its a draw");
 }