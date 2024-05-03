// let uInput= document.querySelector(".guess");12;
 
// Get references to elements
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

// Initialize game variables
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to display message
function displayMessage(message) {
  messageElement.textContent = message;
}

// Function to update score
function updateScore(newScore) {
  scoreElement.textContent = newScore;
}

// Function to update highscore
function updateHighscore(newHighscore) {
  highscoreElement.textContent = newHighscore;
}

// Function to reset the game
function resetGame() {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  updateScore(score);
  guessInput.value = '';
  numberElement.textContent = '?';
}

// Function to handle guess
function handleGuess() {
  const guess = parseInt(guessInput.value);

  // Check if guess is correct
  if (!guess || guess < 1 || guess > 20) {
    displayMessage('⛔️ Invalid guess!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    numberElement.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';    
    
    
    numberElement.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      updateHighscore(highscore);
    }
  } else {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    updateScore(score);
  }
 
  
  // Check if the game is over
  if (score === 0) {
    displayMessage('💥 You lost the game!');
  }
}


// Event listener for check button
checkButton.addEventListener('click', handleGuess);

// Event listener for again button
againButton.addEventListener('click', resetGame);

// Initialize game
resetGame();
