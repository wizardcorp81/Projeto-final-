//importação das bibliotecas
import readlineSync from 'readline-sync'
import chalk from 'chalk'

//Criado a classe
class historia {
    constructor( quem, oQueDeseja, paraQue ) {        
        this.quem = quem
        this.oQueDeseja = oQueDeseja 
        this.paraQue = paraQue
    }

}

//Inputs do usuário
let quem = readlineSync.question('Quem?\n');
let oQueDeseja = readlineSync.question('O que deseja?\n');
let paraQue = readlineSync.question('Para que?\n');

const projeto = new historia( quem, oQueDeseja, paraQue )

//Outputs para usuário
console.log("Como " + chalk.bgBlue(projeto.quem) + ", eu desejo " + chalk.bgBlue(projeto.oQueDeseja) + ", para " + chalk.bgBlue(projeto.paraQue) + ".");