// function that randomly choosing between rock paper and scissors 

function getComputerChoice() {
    all_choice = ["rock","paper","scissors"];
    index =Math.floor(Math.random()*all_choice.length);
    ChoiceComputer= all_choice[index];

    return ChoiceComputer;
}

// fucntion that play a round of rock,paper,scissors

function PlayRound(player_choice, computerChoice) {
    
    let player=0;
    let computer=0;
    if (player_choice == "rock" && computerChoice =="scissors"||
        player_choice == "paper" && computerChoice =="rock"||
        player_choice == "scissors" && computerChoice =="paper"){
    result= "player";
    
    }
    else if(player_choice == computerChoice){
        result= "draw";
    }
    else { 
        result= "computer";
        
    }
return result
}

let player=0;
let computer=0;
let numberOfRound =1;
let tablescore =[player, computer];
let playerSelection = "rock";

//loop to play a game of 5 rounds of rock,paper,scissors

while(numberOfRound<6){
    let computerSelection = getComputerChoice();
    PlayRound(playerSelection,computerSelection);
    console.log("----------------");
    console.log(`Round number ${numberOfRound} !`);
    if(result=="player"){
        console.log("You win")
        tablescore[0]++;
    }
    else if(result=="computer"){
        console.log("You lose")
        tablescore[1]++;
    }
    else{
        console.log("it's a draw")
    }
    
    numberOfRound+=1;
    
}
//display result of the game

console.log("              ")
console.log("Result of the game:");

// if condition to check who is the winner between the player and the computer and display it

if(tablescore[0]>tablescore[1]){
    console.log("Player win the game !");
 }
 else if( tablescore[0]<tablescore[1]){
    console.log("Computer win the game !");
 }
 else{
    console.log("its a draw try again !");
 }