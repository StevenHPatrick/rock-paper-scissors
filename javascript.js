function getComputerChoice() {
  let ran_num = Math.random();
  if (ran_num < .33){
    return "rock";
  } else if (ran_num > .66){
    return "scissors";
  } else {
    return "paper";
  }
}

function getHumanChoice() {
  let choice = prompt("Do you pick rock, paper, or scissors?");
  return choice;
}

function checkChoices(human_choice, computer_choice){
  console.log("Comparing player: " + human_choice + " to computer " + computer_choice);
  if (human_choice == computer_choice) {
    console.log(human_choice + " and " + computer_choice);
    return "tie";
  } else if(((human_choice == "rock") && (computer_choice == "paper")) || ((human_choice == "paper") && (computer_choice == "scissors")) || ((human_choice == "scissors") && (computer_choice == "rock"))){
    console.log("Computer won with: " + computer_choice + " vs " + human_choice);
    return "computer";
  } else {
    console.log("Player won with " + human_choice + " vs " + computer_choice);
    return "human";
  }
  console.log("Nothing matched");
}

let humanScore = 0;
let computerScore = 0;

function playRound(){

  for(let i = 0; i < 5; i++){
    let human_choice = getHumanChoice();
    let computer_choice = getComputerChoice();
    let result = checkChoices(human_choice, computer_choice);
    if (result == "computer"){
      computerScore++;
      console.log("Computer Won!");
    } else if (result == "human"){
      humanScore++;
      console.log("You Won!");
    }
  }
  console.log(humanScore + " to " + computerScore);
  
}

playRound();
