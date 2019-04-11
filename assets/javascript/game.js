// Right now the only word you get is patriots, suck it Giants fans. Trying to KISS.
var choice = "patriots";

// Creating variables to hold the number of wins, the countdown, the history of logged keys.
var wins = 0;
var countdown = 12;


// Create variables that hold references to the places in the HTML where we want to display things.
var gameDirectionsText = document.getElementById("gameDirections-text");
var winsText = document.getElementById("wins-text");
var countdownText = document.getElementById("countdown-text");
var historyText  = document.getElementById("history-text");
var guessLeft  = document.getElementById("guess-left");
var underscores  = document.getElementById("underscores");


// This function is run whenever the user presses a key.

document.onkeyup = function(event) {
    
    // Determines which key was pressed.
    var userGuess = event.key;
    var history = [];
    countdown--;
    history.push(userGuess)
    //console.log(userGuess)
    //console.log(countdown)
    //console.log(history)
    document.getElementById("countdown-text").innerHTML = ("Guesses Left: " + countdown);
    document.getElementById("history-text").innerHTML = ("Letters Guessed: " + history);
    //if ((userGuess === "p") || (userGuess === "a") || (userGuess === "t") || (userGuess === "r") || (userGuess === "i") || (userGuess === "o")|| (userGuess === "t") || (userGuess === "s")) {
        //return userGuess;
        //}
    }
    

function printUnderscores(word) {
    //console.log(word.length);
    var wordLength = word.length;
    var blanks = [];
    for (var i = 0; i < wordLength; i++) {
        blanks.push("_")
    }
    //console.log(blanks.join(" "))
    document.getElementById("underscores").innerHTML = blanks.join(" ");
}
printUnderscores(choice)