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
        this.computer.attack();
    }

}