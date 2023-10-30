import { Player, Computer } from "./player";

export const game = {
    
    player: new Player("player"),
    computer: new Computer("computer"),

    init() {
        this.player.gameboard.autoPopulateBoard();
        this.computer.gameboard.autoPopulateBoard();
    },

    playRound(coord) {
        this.computer.gameboard.receiveAttack(coord);
        const computerMove = this.computer.attack();
        setTimeout(this.player.gameboard.receiveAttack(computerMove), 1000);
    }

    checkWinner() {
        if (this.computer.gameboard.allSunk() || this.player.gameboard.allSunk()) {
            // end game
        }
    }

}