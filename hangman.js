let inquirer = require("inquirer");
let CompG = require("./word.js");
let Letter = require("./letter.js");


class Game{
    constructor(win=0,totalGuess=15,letterGuessed=[],displayedWord=[]){
        this.win = win;
        this.totalGuess = totalGuess;
        this.letterGuessed = letterGuessed;
        this.displayedWord = displayedWord;


        this.printStats = function() {
            console.log( 'WINS: ' + this.win  + '\nNUMBER OF GUESSES REMAINING: ' + this.totalGuess + '\nLETTERS ALREADY GUESSED: ' + this.letterGuessed);
            console.log("\n-------------\n");
            };
        
        this.playGame = function(){
            const cg = new CompG();
            const compG = cg.computerGuess();
            const letter = new Letter();
            let count = 0;
            console.log("NEW GAME");
            console.log('Total Guess Remaining',this.totalGuess);
            console.log('computer guess is: ',compG);
            
            inquirer.prompt([
                {
                  input: "input",
                  name: "guess",
                  message: "Guess a Letter",
                  validate: function(value) {
                    if (isNaN(value) === true ) {
                      return true;
                    }
                    return false;
                    }
                } 
              ]).then(function(answers) {
                  console.log(answers.guess);
                  console.log('Total Guess Remaining',this.totalGuess);

                if (this.totalGuess>0) {
            
                    if (this.letterGuessed.includes(answers.guess))  
                        {
                        // display choose another letter
                        console.log('Letter used before.Please choose another letter!');
                        }

                    //Compare user key with word letters

                    else if (compG.includes(answers.guess))
                    {
                        
                        //Get the letter location & replace the _ with the letter
                        let n = compG.indexOf(answers.guess);
                        //console.log(n);
                        console.log(this.displayedWord);
                        letter.setCharAt(displayedWord,n,userkey);

                        //insert word in the position & display                  
                        this.totalGuess--;
                        // display totalGuess in Guess Remaining
                        this.letterGuessed.push(answers.guess);
                        console.log(this.letterGuessed);
                        console.log('display word: '+ this.displayedWord);
                        playGame();
                        //display letter guess update
                        if (this.displayedWord === compG) {
                            win++;
                            compG = cg.computerGuess();
                            letter.showLength(compG);
                            this.totalGuess = 15;
                            this.etterGuessed = [];
                            this.displayedWord = [];
                            
                            console.log(this.displayedWord);
                            letter.displayEmpty();
                            console.log('YOU WON! GAME RESTARTED');
                        }

                    }
                    else
                    {
                        // display totalGuess in Guess Remaining
                        this.totalGuess--;
                        //display letter guess update
                        this.letterGuessed.push(answers.guess);
                        console.log(this.letterGuessed);
                    }
                }
                else
                {
                    compG = cg.computerGuess();
                    letter.showLength(compG);
                    this.win = 0;
                    this.totalGuess = 15;
                    this.letterGuessed = [];
                    this.displayedWord = []; 
                    console.log(displayedWord);
                    letter.displayEmpty();
                    console.log('YOU LOST! GAME RESTARTED');
                }
                    this.printStats();
                })
            }
        }
        
        

    
}

const startGame = new Game();
console.log(startGame.playGame());
