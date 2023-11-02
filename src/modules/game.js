import { Player, Computer } from "./player";
import { displayGameboards, displayShips, addEventListeners, updateBoards } from "./ui";

export const game = {
  player: new Player("player"),
  computer: new Computer("computer"),

  init() {
    displayGameboards();
    this.player.gameboard.autoPopulateBoard();
    this.computer.gameboard.autoPopulateBoard();
    displayShips(this.player.gameboard);
    addEventListeners();
  },

  playRound(coord) {
    this.computer.gameboard.receiveAttack(coord);
    updateBoards(this.computer);
    const computerMove = this.computer.attack();
    setTimeout(() => {
      game.player.gameboard.receiveAttack(computerMove);
      updateBoards(game.player);
    }, 1000);
  },

  /* checkWinner() {
        if (this.computer.gameboard.allSunk() || this.player.gameboard.allSunk()) {
            // end game
        }
    }*/
};
