
//Constructor to choose a word
class ComptGuess{
    constructor(){
        this.movie= ['FROZEN', 'NEMO', 'SMURF','DORY']
        this.computerGuess = function() {
            const compGuess= this.movie[Math.floor(Math.random() * this.movie.length)];
            return compGuess;

        };
        this.printStats = function() {
            console.log("Computer Guess was: " + this.computerGuess());
            console.log("\n-------------\n");
            };
        }
}


module.exports= ComptGuess;