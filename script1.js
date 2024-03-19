document.addEventListener('DOMContentLoaded', function () {
    const choices = ['rock', 'paper', 'scissors'];
    let computerScore = 0;
    let playerScore = 0;
    let game=true;
  
    const computerScoreElement = document.getElementById('Computer-Score');
    const playerScoreElement = document.getElementById('Your-Score');
  
    const computerChoiceElement = document.querySelector('.player-choice');
    const computerChoiceImage = document.getElementById('computer-choice-image');
   
    const rockButton = document.querySelector('.rock-btn');
    const paperButton = document.querySelector('.paper-btn');
    const scissorsButton = document.querySelector('.scissor-btn');
    const restartBtn = document.getElementById('restart');
    const rulesBtn = document.querySelector('#rules-btn');
    const rules = document.querySelector(".rules");

    const hints = document.querySelector('.hints');
    rules.style.display = 'block';
    

    const closeBtn = document.getElementById("close-btn");
    closeBtn.style.display= 'block';

  
    const winPrompt = document.querySelector('.win-prompt');
    const prompt1 = document.getElementById('click1');
    const prompt2 = document.getElementById('click2');

    
    const l1 = document.querySelector(".line-between1");
    const l2 = document.querySelector(".line-between2");
    const l3 = document.querySelector(".line-between3");

    const scorecard = document.querySelector(".score");

    computerChoiceElement.style.left="1000px";
    computerChoiceElement.style.top="200px";
  
    prompt1.style.display = 'none';
    prompt2.style.display = 'none';
    restartBtn.style.display = 'none';
    restartBtn.innerText="PLAY AGAIN"
    computerChoiceElement.style.display='none'
  
    rockButton.style.top="200px";
    rockButton.style.left="350px";
    
    scissorsButton.style.top="200px";
    scissorsButton.style.left="750px";

    paperButton.style.top="400px";
    paperButton.style.left="540px";
    
  
    winPrompt.style.left="535px";
    winPrompt.style.top="200px";
  
  if(game==true){

    closeBtn.addEventListener('click', function(){
        rules.style.display='none';
        closeBtn.style.display= 'none';
    });

    rulesBtn.addEventListener('click', function(){
        rules.style.display='block';
        closeBtn.style.display= 'block';
    });



    rockButton.addEventListener('click', function () {
        if (!game) return; // Exit if the game is not active
            game = false;
        playRound('rock');
        paperButton.style.display="none";
        scissorsButton.style.display="none";
        winPrompt.style.left="535px";
        winPrompt.style.top="200px";
        computerChoiceElement.style.left="750px";
        computerChoiceElement.style.top="200px";
        computerChoiceElement.style.display='block';
        l1.style.display="none";
        l2.style.display="none";
        l3.style.display="none";
        
    });
  
    paperButton.addEventListener('click', function () {
        if (!game) return; // Exit if the game is not active
            game = false;
        playRound('paper');
        rockButton.style.display="none";
        scissorsButton.style.display="none";
        winPrompt.style.left="535px";
        winPrompt.style.top="200px";
        computerChoiceElement.style.left="750px";
        computerChoiceElement.style.top="200px";
        paperButton.style.top="200px";
        paperButton.style.left="350px";
        computerChoiceElement.style.display='block';
        l1.style.display="none";
        l2.style.display="none";
        l3.style.display="none";
        
    });
  
    scissorsButton.addEventListener('click', function () {
        if (!game) return; // Exit if the game is not active
            game = false;
        playRound('scissors');
        paperButton.style.display="none";
        rockButton.style.display="none";
        winPrompt.style.left="535px";
        winPrompt.style.top="200px";
        computerChoiceElement.style.left="750px";
        computerChoiceElement.style.top="200px";
        scissorsButton.style.top="200px";
        scissorsButton.style.left="350px";
        computerChoiceElement.style.display='block';  
        l1.style.display="none";
        l2.style.display="none";
        l3.style.display="none";  
    });
  
    restartBtn.addEventListener('click', function () {
        restartGame();
    });
  
    function restartGame() {
        updateScores();
        computerChoiceElement.style.display='none';
        computerChoiceImage.style.display='none';
        prompt1.style.display = 'none';
        prompt2.style.display = 'none';
        restartBtn.style.display = 'none';
        scorecard.style.display='flex';
        l1.style.display="block";
        l2.style.display="block";
        l3.style.display="block";  
        paperButton.style.display="block";
        scissorsButton.style.display="block";
        rockButton.style.display="block";
        computerChoiceElement.style.display='block';
        computerChoiceImage.style.display='block';
        rules.style.display='block';
        closeBtn.style.display= 'block';  
        hints.style.display = 'block';
        // restartBtn.innerText="REPLAY";
        // prompt1.innerText = "Hurray!!!";
        prompt1.style.fontSize = "25px";
        // prompt2.innerText = "YOU WON"
        prompt2.style.fontSize = "15px";
        // restartBtn.innerText="PLAY AGAIN";
        restartBtn.style.width = "110px";
        restartBtn.style.height = "25px";
        game=true;
    }
  
  function playRound(playerChoice) {
      const randomNumber = Math.floor(Math.random() * 3);
      const computerChoice = choices[randomNumber];
      computerChoiceImage.src = `https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/${computerChoice}.png`;
  
      if (playerChoice === computerChoice) {
          restartBtn.innerText="REPLAY";
          displayResult('TIE');
      } else if (
          (playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'scissors' && computerChoice === 'paper') ||
          (playerChoice === 'paper' && computerChoice === 'rock')
      ) {
            scorecard.style.display='none';
            l1.style.display="none";
            l2.style.display="none";
            l3.style.display="none";  
            paperButton.style.display="none";
            scissorsButton.style.display="none";
            rockButton.style.display="none";
            computerChoiceElement.style.display='none';
            computerChoiceImage.style.display='none';
            rules.style.display='none';
            closeBtn.style.display= 'none';  
            hints.style.display = 'none';
            restartBtn.innerText="REPLAY";
            prompt1.innerText = "Hurray!!!";
            prompt1.style.fontSize = "50px";
            prompt2.innerText = "YOU WON"
            prompt2.style.fontSize = "30px";
            restartBtn.innerText="PLAY AGAIN";
            restartBtn.style.width = "180px";
            restartBtn.style.height = "50px";
            playerScore++;
          
      } else {
          displayResult('YOU LOSE');
          restartBtn.innerText="PLAY AGAIN";
          computerScore++;
      }
  
      updateScores();
      prompt1.style.display = 'block';
      prompt2.style.display = 'block';
      restartBtn.style.display = 'block';
  }
  
  
    function displayResult(result) {
        prompt1.innerText = result;
    }
  
    function updateScores() {
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    }

  }
});
  