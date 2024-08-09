
const score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

updateScoreElement();


let computerMove = '';
function pickComputerMove () {    
const randomNumber = Math.random();

if (randomNumber >= 0 && randomNumber < 1/3) {
computerMove = 'rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
    
} else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
}}



function playGame(playerMove){
    pickComputerMove()
    let result = '';

if (playerMove === 'Scissors'){ 
        if (computerMove === 'rock') {
        result = 'Lose.'
    }   else if (computerMove === 'paper') {
        result = 'Win.'
    }   else if (computerMove === 'scissors') {
        result = 'Tie.'
    }}
else if (playerMove === 'Paper'){
        if (computerMove === 'rock') {
        result = 'Win.'
    }   else if (computerMove === 'paper') {
        result = 'Tie.'
    }   else if (computerMove === 'scissors') {
        result = 'Lose.' }}
else if (playerMove === 'Rock') {
        if (computerMove === 'rock') {
            result = 'Tie.'
        }
        else if (computerMove === 'paper') {
            result =  'Lose.'                    
        }
        else if (computerMove === 'scissors') {
            result = 'Win.'
        }}

if (result ==='Win.'){
    score.wins +=1;

}  else if (result === 'Lose.'){
    score.losses +=1; 
}  else if (result === 'Tie.') {
    score.ties +=1;
}


       


localStorage.setItem('score', JSON.stringify(score));    


updateScoreElement();

document.querySelector('.js-results')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `<div class=result-line>    You 
<img src= '${playerMove}-emoji.png' class="img-result">
<img src= '${computerMove}-emoji.png' class="img-result">
Computer <div>`;
  



}

function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `<div class='result-record'>Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} <div>`;
    
   
}


