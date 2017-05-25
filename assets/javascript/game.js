
var numberWins = 0;
var numberLosses = 0;
var guessesLeft = 9;
var	letters = ["a", "b", "c", "d", "e", "f",
				 "g", "h", "i", "j", "k", "l", 
				 "m", "n", "o", "p", "q", "r", 
				 "s", "t", "u", "v", "w", "x", 
				 "y", "z"];
var guessesInputted = [];
var computerLetter;
// Game starts when user hits a key.
document.onkeyup = function start (event) {
	
	// Key input is collecte by computer. Computer letter variable is created.
	var userGuess = event.key;
	
	// If the input of the key is part of the alphabet, then rest of code will run. 
	if (letters.indexOf(userGuess) >= 0) {
		console.log("This is a valid letter.")
		// If the number of guesses left is equal to the starting number, then a letter is assigned to computerLetter.
		if (guessesLeft == 9) {
			computerLetter = letters[Math.floor(Math.random() * letters.length)];
			console.log('User guessed: ' + userGuess);
			//console.log('The computer chose: ' + computerLetter);
		// If the number of guesses is not equal to nine and is less than 1, then array of guesses is emptied,
		// reset guesses to 9, and 1 is added to the loss count. 
		} else if (guessesLeft < 1) {
				console.log("User Loses. Answer was: " + computerLetter);
				guessesInputted = [];
				numberLosses++;
				guessesLeft = 9;
		// If the letter the user selected is not equal to the letter the computer selected, AND, if
		// the user's letter has not already been selected, then the letter is added to guessed list and
		// Losses goes up by one
		}	if ((userGuess != computerLetter) && (guessesInputted.indexOf(userGuess) < 0)) {
			guessesInputted.push(userGuess);
			guessesLeft--;
			//console.log(guessesInputted.indexOf(userGuess));
			//console.log('User guessed: ' + userGuess);
			//console.log('The computer chose: ' + computerLetter);
			console.log("Wrong! User loses a guess!");
		// If letter has been selected than nothing will happen and console will log a message that the key has been
		// pressed.
		}	else if ((userGuess != computerLetter) && (guessesInputted.indexOf(userGuess)) >= 0) {
				console.log("Letter already guessed. Try again. ")
		// User selected correct key and game resets.
		}	 else {
				guessesInputted = [];
				numberWins++;
				guessesLeft = 9;
				console.log("User chose the correct letter! User wins!");
			}
			
		}
	// Non aphabet key is recnogized but not able to be played.
	else {
		console.log("Enter a valid key");
	}
// Displays javascript iin HTML
	document.getElementById("numberGuesses").innerHTML = guessesLeft;
	document.getElementById("losses").innerHTML = numberLosses;
	document.getElementById("wins").innerHTML = numberWins;
	document.getElementById("lettersGuessed").innerHTML = guessesInputted;
	
}
	
