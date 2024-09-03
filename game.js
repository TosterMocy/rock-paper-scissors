// console.log("Hello world");

let computerMove = '';

getPlayerGameMove();



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
    return choice;
}

function getRandomInt(min, max){
return Math.floor(Math.random() * (max-min +1) +min);
}

function getPlayerGameMove(){
    const gameButtons = document.querySelectorAll(".game-button");
    let choice ='';
    gameButtons.forEach( (button) => {
    button.addEventListener('click', () => {
        choice=button.textContent.toLowerCase();
        choice = choice.slice(0, -1);
        console.log(choice);
        setComputerGameMove();
    });    
    })
    // console.log(gameButtons);
    
}

