import { Player, Computer } from "./player";

export const playGame = () => {
    const player = new Player("player");
    const computer = new Computer("computer");
    player.gameboard.autoPopulateBoard();
    computer.gameboard.autoPopulateBoard();
    console.log(player.gameboard.board);
    console.log(computer.gameboard.board);

}