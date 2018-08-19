var computerPick = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guesses = [];


document.onkeyup = function(event) {
    //computer picks random letter 
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    var computerGuess = computerPick[Math.floor(Math.random()*computerPick.length)]; 
    guesses.push(userGuess);
    //checks user guesses compared to computer guess  
    if (userGuess === computerGuess) {
        wins++;
        alert("You Win!");
    }
    if (userGuess !== computerGuess){
        guessesRemaining--;
    }
    if (guessesRemaining === 0){
        losses++;
        alert("You lose!"); 
    } 
//display guess on screen
    document.querySelector("#incorrect-guess").text = userGuess;
    }