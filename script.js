// Set the iframe to occupy full width of its parent container
const player = document.querySelector("#player");
player.style.width = `${player.parentElement.offsetWidth}px`;

// Get game elements
const startGameButton = document.getElementById("startGameButton");
const gameDiv = document.getElementById("game");
const guessInput = document.getElementById("guess");
const submitGuessButton = document.getElementById("submitGuess");
const gameMessage = document.getElementById("gameMessage");

// Initialize the correct number to guess
let numberToGuess;

// Function to start a new game
function startNewGame() {
    number
