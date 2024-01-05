function flipCoin() {
    return Math.random() < 0.5 ? "heads" : "tails";
}

let guesses = 0;

function displayMessage(message, delay, callback) {
    alert(message);
    setTimeout(callback, delay);
}

function playCoinGame() {
    function processGuess() {
        const userGuess = prompt("Guess heads or tails:");

        if (!userGuess) {
            return;
        }

        const coinResult = flipCoin();

        if (userGuess.toLowerCase() === coinResult) {
            displayMessage(`Congratulations! You guessed correctly. It's ${coinResult}!`, 500, () => {});
        } else {
            guesses++;
            displayMessage(`Sorry, your guess is incorrect. It's ${coinResult}. Try again!`, 500, () => {
                if (guesses < 3) {
                    processGuess();
                } else {
                    displayMessage("Sorry, you've reached the maximum number of guesses. Better luck next time!", 500, () => {});
                }
            });
        }
    }

    processGuess();
}

// Start the game
playCoinGame();