//References to DOM elements
var gameDirectionsText = document.getElementById("gameDirections-text");
var winsText = document.getElementById("wins-text");
var countdownText = document.getElementById("countdown-text");
var historyText  = document.getElementById("history-text");
var guessLeft  = document.getElementById("guess-left");
var underscores  = document.getElementById("underscores");


// This function is run whenever the user presses a key.
window.onload = function() {
    var wins = 0;
    var countdown = 12;
    var choice = ["patriots", "rams", "chargers", "chiefs", "colts", "cowboys", "eagles", "saints"];
    var currWord = choice[Math.floor(Math.random() * choice.length)];
    
    confirm("Welcome to NFL Hangman! In this game only teams that made the playoffs last year (2018/19 Season) are included! Good luck and Omaha.. Omaha set HUT!");
    
    document.getElementById("wins-text").innerHTML = ("Wins: 0");
    document.getElementById("countdown-text").innerHTML = ("Guesses Left: 12");
    document.getElementById("history-text").innerHTML = ("Letters Guessed: ");
    
    //Used tools
        //debugger;
        // var userGuess = new Array();
        //console.log(countdown)
        //console.log(history)
        //console.log(currWord);
    //End used tools

    document.onkeyup = function(event) {
        
        //If game is running
        if(countdown > 0) {
            countdown--;
            var history = [];
            var userGuess = [event.key + ", "];
            history.push(userGuess)
            console.log(userGuess)
            document.getElementById("wins-text").innerHTML = ("Wins: " + wins);
            document.getElementById("countdown-text").innerHTML = ("Guesses Left: " + countdown);
            document.getElementById("history-text").innerHTML = ("Letters Guessed: " + history);
            
            //Replace first letter of string UNFINISHED
            if (event.key === currWord[0]){
                var newstring = choice;
                var index = 0;
                newstring = blanks.substr(0, index) + event.key + newstring.substr(index + 1);
                document.write("<br>New String: "+ newstring);
            }
        }
        
        //If your guesses are up
        else if(countdown < 1) {
            if (confirm("You lost, do you want to try again?")) {
                setTimeout("location.reload(true);",1500)
            }
        }
    }
    
    
    //Underscore push function
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
    printUnderscores(currWord)
};