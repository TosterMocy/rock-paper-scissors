// console.log("Hello world");

// let computerMove = '';
const playerMoveHTML =  document.querySelector('.player.choice');
const computerMoveHTML = document.querySelector('.computer.choice');
let playerGameScore = 0;
let computerGameScore = 0;
const roundResultHTML = document.querySelector('.result');
const playerScoreHTML = document.querySelector('.player h3');
const computerScoreHTML = document.querySelector('.computer h3');
const gameButtons = document.querySelectorAll(".game-button");

let playerChoice='';
let computerChoice='';
let roundNumber = 0;


gameButtons.forEach( (button) => {
    button.addEventListener('click', () =>{
        startGameRound(button);
        if(playerGameScore === 3 || computerGameScore===3)restartGame();
    });    
    }) 

   
function restartGame(){
    playerGameScore=0;
    computerGameScore=0;
    playerScoreHTML.textContent = playerGameScore;
    computerScoreHTML.textContent = computerGameScore;
    roundNumber=0;

}

function startGameRound(clickedButton){

    roundNumber++;
    getPlayerGameMove(clickedButton);
    let roundWinner = compareMove(playerChoice, computerChoice);
    assignScore(roundWinner);
    playerScoreHTML.textContent = playerGameScore;
    computerScoreHTML.textContent = computerGameScore;
    
    
}


function setComputerGameMove(){
    let choice = getRandomInt(0,2);
    switch(choice){
        case 0: 
            choice = "rock";
            break;
        case 1: 
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            console.log("error");
        }
    console.log(`pc: ${choice}`);
    computerMoveHTML.textContent = choice.toUpperCase();
    return choice;
}

function getRandomInt(min, max){
return Math.floor(Math.random() * (max-min +1) +min);
}

function getPlayerGameMove(clickedButton){
    choice=clickedButton.textContent.toLowerCase();
    choice = choice.slice(0, -1);
    console.log(choice);
    playerMoveHTML.textContent = choice.toUpperCase();
    playerChoice = choice;
    computerChoice = setComputerGameMove();
          
         
    }   
     
    
    // console.log(gameButtons);

    function compareMove(playerMove, computerMove)
    {
        if(playerMove===computerMove) {
            return 'draw';
        } else if((playerMove ==='rock' && computerMove ==='scissors') || (playerMove=='paper' 
            && computerMove==='rock') || (playerMove==='scissors' && computerMove==='paper')) {
                console.log('player won')
                return 'player';
            } else return 'computer';
    }

    /**
     * Adds scores to the player or computer based on the given argument.
     * Changes html: score, result
     * @param {string} roundWinner name of the round winner 
     */
    function assignScore(roundWinner){
        switch(roundWinner){
            case 'player': 
                playerGameScore++;
                playerScoreHTML.textContent = playerGameScore;
                roundResultHTML.textContent = "You!";
                break;
            case 'computer':
                computerGameScore++;
                computerScoreHTML.textContent = computerGameScore;
                roundResultHTML.textContent = "Computer";
                break;
            default:
                roundResultHTML.textContent = "Draw";
                break;
        }
    }
    

