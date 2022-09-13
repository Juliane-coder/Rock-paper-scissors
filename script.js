const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice(n) {

    return myArray[~~(Math.random() * myArray.length)];

    }


function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

  
 
   if(
    (playerSelection=="paper" && computerSelection=="paper") ||
    (playerSelection=="scissor" && computerSelection=="scissor") ||
    (playerSelection=="rock" && computerSelection=="rock") )
     {
        console.log("Empate!");   
    }

    else if(
        (playerSelection=="paper" && computerSelection=="scissor") ||
        (playerSelection=="rock" && computerSelection=="paper") ||
        (playerSelection=="scissor" && computerSelection=="rock") ) {
        console.log("You lose!");
    }


    else {
        (playerSelection=="paper" && computerSelection=="rock") ||
        (playerSelection=="scissor" && computerSelection=="paper") ||
        (playerSelection=="rock"&& computerSelection=="scissor")
        
        console.log("You won!")
    
     
    }


   const playerSelection = rock;
   const computerSelection = getComputerChoice();

   console.log(playRound(playerSelection, computerSelection));

   let answer = prompt ("Please, choose "paper", "rock" or "scissor")

   for (let i = 1; i <= 5; i ++) {

    console.log(i);

   }

 
function game () {

    playRound();
}

