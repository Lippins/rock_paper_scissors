//whole game
function Game(){
  //move from challenge screen to game screen
  function enterGameScreen (){
    const play = document.querySelector("#play");
    const challengeScreen = document.getElementById("aside");
    const gameScreen = document.getElementById("section");

    play.addEventListener("click", ()=>{
      gameScreen.classList.toggle("dissapear");
      challengeScreen.classList.toggle("dissapear");
    });
  }

  enterGameScreen();

  function activateButtomButtons (){
  //activate game reset
    function resetGame(){
      const resetButton = document.getElementById("reset");
      resetButton.addEventListener("click",()=>{
        window.location.reload();
      });
    };

    resetGame();

    //activate closeGame
    function closeGame(){
      const close = document.getElementById("close");
      close.addEventListener("click", ()=>{
        window.close();
      });
    }

    closeGame();
  }

  activateButtomButtons();

  function playGame(){
    //initialise player and computer score
    let playerScore = 0;
    let computerScore = 0;

    //player and computer choice options
    const playerChoiceList = document.querySelectorAll("#icons button");
    const computerChoiceList = ["rock", "paper", "scissors"];
    let playerChoice;
    let computerChoice;
  
    playerChoiceList.forEach((button)=>{
      button.addEventListener("click", ()=>{
        playerChoice = button.id;
        function computerPlay(){
          computerChoice= computerChoiceList[Math.floor(Math.random()*computerChoiceList.length)];
        }
        computerPlay();
  
        //updates player and computer hand signs based on choice
        let playerHandIcon = document.querySelector("#player");
        let computerHandIcon = document.querySelector("#computer");   
  
        playerHandIcon.src = `../images/${playerChoice}.png`;
        computerHandIcon.src = `../images/${computerChoice}.png`;
        
        //grabbing onto the results output source
        let winner = document.querySelector("#winnerDisplay h3");

        function whoWins(playerChoice, computerChoice){
          //compare hand signs
          if (playerChoice == "rock" && computerChoice == "paper"){
              winner.textContent = "Computer Wins! Paper covers Rock!";
              ++computerScore;
        
            } else if (playerChoice == "paper" && computerChoice == "scissors"){
              winner.textContent = "Computer Wins! Scissors cuts Paper!";
              ++computerScore;
            
            } else if (playerChoice == "scissors" && computerChoice == "rock"){
              winner.textContent = "Computer Wins! Rock breaks Scissors!";
              ++computerScore;
            
            } else if(playerChoice == "rock" && computerChoice == "scissors"){
              winner.textContent = "You Win! Rock breaks Scissors!";
              ++playerScore;
            
            } else if (playerChoice == "paper" && computerChoice == "rock"){
              winner.textContent = "You Win! Paper covers Rock!";
              ++playerScore;
            
            } else if (playerChoice == "scissors" && computerChoice == "paper"){
              winner.textContent = "You Win! Scissors cuts Paper!";
              ++playerScore;
            
            } else if (playerChoice === computerChoice){
              winner.textContent = "Its a tie!";
          }
        }

        whoWins(playerChoice, computerChoice);
  
        function updateScore(){
          let scorePlayer = document.querySelector("#playerHand p");
          let scoreComputer = document.querySelector("#computerHand p");
          scorePlayer.textContent = `${playerScore}`;
          scoreComputer.textContent = `${computerScore}`;
        }

        updateScore();
  
        function declareWinner(){
          if(playerScore == 5|| computerScore == 5){
            if(playerScore>computerScore){
              winner.textContent = "Amazing Play!! You Won The game!";
              } else{
                winner.textContent = "You Lose. Computer Takes This One";
            }
            //Prepares to leave game
            function gameOut(){
              window.location.reload();
            }
            //leave game
            function out(){
              setTimeout(gameOut, 1200);
            }
            out();
          }
        }

        declareWinner();

      });
    });
  }

  playGame();

}

Game();

