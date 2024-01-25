class Game {
    constructor(playerChoice){
    this._player = playerChoice;
    this._computer;
    }
    computerChoice () {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const choiceNumber = Math.floor(Math.random() * 3);
    this._computer = computerOptions[choiceNumber];
    }
    get choices (){
        console.log(`Player choose: ${this._player}`);
        console.log(`Computer choose: ${this._computer}`);
    }
    getWinner(){
        if (this._player === this._computer) {
            console.log("Tie!");
        }
        else if (this._player == 'rock') {
            if (this._computer == 'paper') {
                console.log('Computer Won');
            } else {
                console.log('Player Won');
            }
        }
        else if (this._player == 'scissors') {
            if (this._computer == 'rock') {
                console.log('Computer Won');
            } else {
                console.log('Player Won');
            }
        }
        else if (this._player == 'paper') {
            if (this._computer == 'scissors') {
                console.log('Computer Won');
            } else {
                console.log('Player Won');
            }
        }
    }
}
let RockPaperScissors = new Game('paper');
RockPaperScissors.computerChoice();
RockPaperScissors.choices;
RockPaperScissors.getWinner();




