
var Letter = function(letter, guess) {
// A string value to store the underlying character for the letter
	this.letter = letter

// A boolean value that stores whether that letter has been guessed yet
	this.guess = 0
	this.wordGuess = function(callback) {
		if (this.guess) {
			callback(this.letter)
		} else {
			callback('_')
		}
	}

	this.compareGuess = function(letterGuess, letter) {
		if (this.guess === 1) {
			this.guess = 1
		} else {
			if (letterGuess === letter) {
				this.guess = 1
			} else {
				this.guess = 0
			}
		}

	}
}

module.exports = Letter