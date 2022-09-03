const compChoices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
  const compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
  return compChoice;
}

function playRound(playerSelection, computerSelection){
   console.log('Player:', playerSelection, 'Computer:', computerSelection)
   if (playerSelection.toUpperCase() === computerSelection ){
      return `It is a draw! You both picked ${playerSelection} !`;
   } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER'){
      computerScore++ ;
      return 'You lose! Paper beats rock!';
   } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS'){
      playerScore++ ;
      return 'You win! Rock beats scissors!';
   } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK'){
      playerScore++ ;
      return 'You win! Paper beats rock!';
   } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS'){
      computerScore++ ;
      return 'You lose! Scissors beats paper!';
   } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK'){
      computerScore++ ;
      return 'You lose! Rock beats scissors!';
   } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER'){
      playerScore++ ;
      return 'You win! Scissors beats paper!';
   }
}

function game(){
   for (let i=0; i<5; i++){
     let playerSelection = prompt('ROCK, PAPER, SCISSORS, SHOOT...');
     if(compChoices.includes(playerSelection.toUpperCase())===false){
      alert('Are you sure you played Rock, Paper or Scissors?');
      i--;
     } else {
     const computerSelection = computerPlay();
     console.log(playRound(playerSelection, computerSelection));
     }
   }

   if (playerScore > computerScore){
      return 'Congratulations! You beat the computer! ';
   } else if (playerScore < computerScore) {
      return 'Oh no! Better luck next time!';
   } else {
      return 'It was tie! I call a rematch!';
   }
}
console.log(game())
