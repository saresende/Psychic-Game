
var numberWins = 0;
	var numberLosses = 0;
	var guessesLeft = 9;
	var	letters = ["a", "b", "c", "d", "e", "f",
				 "g", "h", "i", "j", "k", "l", 
				 "m", "n", "o", "p", "q", "r", 
				 "s", "t", "u", "v", "w", "x", 
				 "y", "z"];
	var guessesInputted = [];

document.onkeyup = function start (event) {
	
	var userGuess = event.key;
	
	if (userGuess.indexOf(letters)) {
		console.log("This is a valid letter.")
		if (guessesLeft === 9){
			var computerLetter = letters[Math.floor(Math.random() * letters.length)];
			console.log('User Guessed: ' + userGuess);
			console.log('computerGuessed: ' + computerLetter);
	}
	}
	}
	if (userGuess !== computerLetter) {
		guessesInputted.push(userGuess + ',');
		guessesLeft = guessesLeft - 1;
		console.log("User Loses a Guess");
	}
	else if (userGuess === computerLetter) {
		guessesInputted = [];
		numberWins++;
		guessesLeft = 9;
		console.log("User Wins");
	}
	if (guessesLeft < 1) {
		guessesInputted = [];
		numberLosses++;
		guessesLeft = 9;
		console.log("User Loses");
	}
	
	
	else {
		console.log("Enter a valid key");
	}
	document.getElementById("numberGuesses").innerHTML = guessesLeft;
	document.getElementById("losses").innerHTML = numberLosses;
	document.getElementById("wins").innerHTML = numberWins;
	document.getElementById("lettersGuessed").innerHTML = guessesInputted;
	
}
	
