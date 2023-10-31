import { Player, Computer } from "./player";
import { displayShips, updateBoards } from "./ui";

export const game = {
    
    player: new Player("player"),
    computer: new Computer("computer"),

    init() {
        this.player.gameboard.autoPopulateBoard();
        this.computer.gameboard.autoPopulateBoard();
        displayShips(this.player.gameboard);
        // this.player.gameboard.receiveAttack(0,0);
       // this.player.gameboard.receiveAttack(5,5);
        this.computer.gameboard.receiveAttack(0,1);
        this.computer.gameboard.receiveAttack(4,5);
       // updateBoards(this.player);
        updateBoards(this.computer);
    },

    playRound(coord) {
        this.computer.gameboard.receiveAttack(coord);
        const computerMove = this.computer.attack();
        setTimeout(this.player.gameboard.receiveAttack(computerMove), 1000);
    }

    /* checkWinner() {
        if (this.computer.gameboard.allSunk() || this.player.gameboard.allSunk()) {
            // end game
        }
    }*/

}