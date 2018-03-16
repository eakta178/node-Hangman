var Word = require('./word.js')
var Letter = require('./letter.js')
var inquirer = require('inquirer')
var randomWord = require('random-word')


var newWordResult = function(result) {
	correctCount = result
	console.log("correct count index " + correctCount)
}

var guessArray = []
var count = 0

var newGame = function () {
	count = 0
	guessArray = []
	var wordTest = new Word(randomWord())
	console.log(wordTest.letters)


	var askQuestion = function() {
		if (count<10) {
			inquirer.prompt([
				{
					name: "guess",
					message: "Enter in your guess!"
				}

			]).then(function(answers){
				if(guessArray.indexOf(answers.guess) === -1) {
					guessArray.push(answers.guess)
				} else {
					console.log("You've already guessed this letter")
					count--
				}
				wordTest.characterGuessed(answers.guess)
				wordTest.newWord(newWordResult)
				count++
				console.log("correct count " + correctCount)
				console.log("word length " + wordTest.letters.length)
				if(correctCount === wordTest.letters.length) {
					console.log("you guessed the word correctly!")
					newGame()
				} else {
					console.log("You have " + (10-count) + " guesses left :(")
					askQuestion()
				}			
			})
			
		} else {
			console.log("you have no more guesses!")
			newGame()
		}

	}

	askQuestion()
}

newGame()

