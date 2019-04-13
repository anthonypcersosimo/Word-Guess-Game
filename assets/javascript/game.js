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
window.onload = function() {
    confirm("Welcome to NFL Hangman! In this game only teams that made the playoffs last year (2018/19 Season) are included! Good luck and Omaha.. Omaha set HUT!");
    
    document.getElementById("wins-text").innerHTML = ("Wins: 0");
    document.getElementById("countdown-text").innerHTML = ("Guesses Left: 12");
    document.getElementById("history-text").innerHTML = ("Letters Guessed: ");
};

//debugger;
document.onkeyup = function(event) {
    
    var history = new Array();
    var userGuess = new Array();
    console.log(countdown)
    console.log(history)
    // Determines which key was pressed.
    
    if(countdown > 0) {
        countdown--;
        var userGuess = event.key;
        userGuess.push(String.fromCharCode(history))
        console.log(userGuess)
        document.getElementById("wins-text").innerHTML = ("Wins: " + wins);
        document.getElementById("countdown-text").innerHTML = ("Guesses Left: " + countdown);
        document.getElementById("history-text").innerHTML = ("Letters Guessed: " + history);
    }
    
    else if(countdown < 1) {
        if (confirm("You lost, do you want to try again?")) {
            setTimeout("location.reload(true);",1500)
        }
    }
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