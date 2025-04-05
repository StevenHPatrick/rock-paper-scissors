const body = document.body;

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const result = document.createElement("div");

let humanScore = 0;
let computerScore = 0;

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


function playRound(humanChoice){

  let text = "";
  let playerWon = false;

  let human_choice = humanChoice.className;
  let computer_choice = getComputerChoice();
  let game_result = checkChoices(human_choice, computer_choice);
  if (game_result == "computer"){
    computerScore++;
    console.log("Computer Won!");
  } else if (game_result == "human"){
    humanScore++;
    console.log("You Won!");
    playerWon = true;
  }
  
  console.log(humanScore + " to " + computerScore);

  if ((humanScore == 5) || (computerScore == 5)){
    if (playerWon){
      result.textContent = "You WON!!! You pick " + human_choice + " and I picked " + computer_choice; 
    } else {
      result.textContent = "You LOSE! You pick " + human_choice + " and I picked " + computer_choice;       
    }
    
  } else {
    result.textContent = "Your score is: " + humanScore + " and you picked: " + human_choice + " while my score is: " + computerScore + " and I picked: "+ computer_choice;

  }
}


rock.classList.add('rock');
paper.classList.add('paper');
scissors.classList.add('scissors');

rock.addEventListener('click', () => playRound(rock));
paper.addEventListener('click', () => playRound(paper));
scissors.addEventListener('click', () => playRound(scissors));

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
result.textContent = "Press a button to start";

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
body.appendChild(result);
