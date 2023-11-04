import { Player, Computer } from "./player";
import { displayGameboards, displayShips, addEventListeners, updateBoards, displayMessages } from "./ui";

export const game = {
  player: new Player("player"),
  computer: new Computer("computer"),
  playerTurn: true,

  init() {
    displayGameboards();
    this.player.gameboard.autoPopulateBoard();
    this.computer.gameboard.autoPopulateBoard();
    displayShips(this.player.gameboard);
    addEventListeners();
  },

  playerMove(coord) {
    const playerChoice = this.computer.gameboard.receiveAttack(coord);
    updateBoards(this.computer);
    displayMessages(playerChoice, "player");
    this.playerTurn = false;
    const winner = this.checkWinner();
    if (winner) {
      console.log(winner.name);
    }
  },

  computerMove() {
    const computerChoice = game.computer.attack();
    const computerMove = game.player.gameboard.receiveAttack(computerChoice);
    updateBoards(game.player);
    displayMessages(computerMove, "computer");
    game.playerTurn = true;
    const winner = game.checkWinner();
    if (winner) {
      console.log(winner.name);
    }
  },

  playRound(coord) {
    this.playerMove(coord);
    setTimeout(game.computerMove, 1500);
  },

  checkWinner() {
    if (this.computer.gameboard.allSunk()) {
      return this.player;
    } else if (this.player.gameboard.allSunk()) {
      return this.computer;
    }
  }
};
