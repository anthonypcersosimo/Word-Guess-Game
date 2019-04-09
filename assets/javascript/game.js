// Right now the only word you get is patriots, suck it Giants fans. Trying to KISS.
var choice = "patriots";

// Creating variables to hold the number of wins, the countdown, the history of logged keys.
var wins = 0;
var countdown = 12;
var history;
console.log(history)

// Create variables that hold references to the places in the HTML where we want to display things.
var gameDirectionsText = document.getElementById("gameDirections-text");
var winsText = document.getElementById("wins-text");
var countdownText = document.getElementById("countdown-text");
var historyText  = document.getElementById("history-text");


// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        
        // Determines which key was pressed.
        var userGuess = event.key;
        console.log(userGuess)

        if ((userGuess === "p") || (userGuess === "a") || (userGuess === "t") || (userGuess === "r") || (userGuess === "i") || (userGuess === "o")|| (userGuess === "t") || (userGuess === "s")) {
            
        }
    }
