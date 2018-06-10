
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

function playGame(ev){
    var userGuess = ev.key;

    var letterToBeGuessed = Math.floor(Math.random()*alphabetLetters.length);

    var computerOption = alphbetLetters[letterToBeGuessed];

document.querySelector('#wins').innerText = wins;
document.querySelector('#losses').innterText = losses;
document.querySelector('guessesleft').innerText = guessesLeft;
document.querySelector('#yourguesses').innerText = guessesSoFar;

if (userGuess == computerOption) {
    wins++;
    guessesLeft = 9;
    guessSoFar = [];
    computerOption = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    document.querySelector('#wins').innerText = wins;
    document.querySelector('guessesleft').innerText = guessesLeft;
    document.querySelector('#yourguesses').innerText = guessesSoFar;
}

if (userGuess != computerOption) {
    guessesLeft--;
    guessesSoFar[guessesSoFar.length]=userGuess;
    document.querySelector('#guessesleft').innerText = guessesLeft;
    document.querySelector('#yourguesses').innerText = guessesSoFar;
}

if (guessesLeft == 0) {
    losses++;
    alert ("You lost");
    guessLeft = 9;
    guessesSoFar = [];
    computerOption = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    //this last one should have the computer pick another random letter
    document.querySelector('#guessesleft').innerText = guessesLeft;
    document.querySelector('#yourguesses').innerText = guessesSoFar;
    document.querySelector('#losses').innerText = losses;
}


	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	document.onkeyup = playGame;
}
