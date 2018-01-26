var CompG = require("./word.js");


class Letter{
    constructor(){
        
        //function to replace letter at an index of the string
        this.setCharAt = function(str,index,chr){
            if(index > str.length-1) return str;
            var temp1=str.substr(0,index);
            console.log('temp1log: ' + temp1);
            var temp2=str.substr(index+1);
            console.log('temp2log: '+ temp2);
        
            return temp1+chr+temp2;
        };
        // display empty spaces
        this.displayEmpty = function(){
            const cg = new CompG();
            const compG = cg.computerGuess();
            for (let i = 0; i < compG.length; i++) {
                console.log("_");
            }
        };
        this.showLength= function(compG) {
               console.log( 'LENGTH OF THE WORD : ' + compG.computerGuess().length);
            }
        

    }
}
	
    module.exports= Letter;