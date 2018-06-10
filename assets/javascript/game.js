
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var resetGuesses = " ";
var computerOption = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

document.querySelector('#wins').innerText = wins;
document.querySelector('#losses').innerText = losses;
document.querySelector('#guessesleft').innerText = guessesLeft;
document.querySelector('#yourguesses').innerText = guessesSoFar;

function playGame(ev){
    var userGuess = ev.key;
    
    var computerLetter;

    if (userGuess == computerOption) {
        wins++;
        alert ("You won");
        guessesLeft = 9;
        guessesSoFar = [];
        resetGuesses = " ";
        computerOption = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        
        document.querySelector('#wins').innerText = wins;
        document.querySelector('#guessesleft').innerText = guessesLeft;
        document.querySelector('#yourguesses').innerText = resetGuesses;
    } if (userGuess != computerOption) {
        guessesLeft--;
        guessesSoFar.push(userGuess);
        document.querySelector('#guessesleft').innerText = guessesLeft;
        document.querySelector('#yourguesses').innerText = guessesSoFar;
    } if (guessesLeft == 0) {
        losses++;
        alert ("You lost");
        guessesLeft = 9;
        resetGuesses = "";
        guessesSoFar = [];
        computerOption = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        //this last one should have the computer pick another random letter
        document.querySelector('#guessesleft').innerText = guessesLeft;
        document.querySelector('#yourguesses').innerText = guessesSoFar;
        document.querySelector('#losses').innerText = losses;
    }
}
    document.onkeyup = playGame;