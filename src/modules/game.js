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
        setTimeout(this.computer.attack(), 1000);
    }

    checkWinner() {
        if (this.computer.gameboard.allSunk() || this.player.gameboard.allSunk()) {
            // end game
        }
    }

}