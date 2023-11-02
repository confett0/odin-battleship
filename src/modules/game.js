import { Player, Computer } from "./player";
import { displayGameboards, displayShips, addEventListeners, updateBoards, displayMessages } from "./ui";

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
    const playerMove = this.computer.gameboard.receiveAttack(coord);
    updateBoards(this.computer);
    displayMessages(playerMove);
    const computerChoice = this.computer.attack();
    setTimeout(() => {
      const computerMove = game.player.gameboard.receiveAttack(computerChoice);
      updateBoards(game.player);
      displayMessages(computerMove);
    }, 1000);
  },

  checkWinner() {
        if (this.computer.gameboard.allSunk()) {
          return this.player;
        } else if (this.player.gameboard.allSunk()) {
            return this.computer;
        }
    }
};
