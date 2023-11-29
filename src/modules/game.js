import { Player, Computer } from "./player";
import {
  displayGameboards,
  displayShips,
  addEventListeners,
  updateBoards,
  displayMessages,
  openWinnerModal,
} from "./ui";
import { dragAndDrop } from "./drag-and-drop";

export const game = {
  player: new Player("player"),
  computer: new Computer("computer"),
  playerTurn: true,
  isGameOn: true,

  setUp() {
    displayGameboards();
    dragAndDrop();
  },

  start() {
    this.computer.gameboard.autoPopulateBoard();
    addEventListeners();
  },

  playerMove(coord) {
    const playerChoice = this.computer.gameboard.receiveAttack(coord);
    updateBoards(this.computer);
    displayMessages(playerChoice, "player");
    this.playerTurn = false;
  },

  computerMove() {
    const computerChoice = game.computer.attack();
    const computerMove = game.player.gameboard.receiveAttack(computerChoice);
    updateBoards(game.player);
    displayMessages(computerMove, "computer");
    game.playerTurn = true;
  },

  playRound(coord) {
    this.playerMove(coord);
    this.endGame();
    if (this.isGameOn) {
      setTimeout(game.computerMove, 1300);
      this.endGame();
    }
  },

  checkWinner() {
    if (this.computer.gameboard.allSunk()) {
      return this.player;
    } else if (this.player.gameboard.allSunk()) {
      return this.computer;
    }
  },

  endGame() {
    const winner = this.checkWinner();
    if (winner) {
      this.isGameOn = false;
      openWinnerModal(winner);
    }
  },

  resetGame() {
    this.player = new Player("player"),
    this.computer = new Computer("computer"),
    this.isGameOn = true;
    this.playerTurn = true;
    displayMessages("Awaiting orders, admiral!");
  }
};
