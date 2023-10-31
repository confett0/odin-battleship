import { Gameboard } from "./gameboard";

export const createBoardCells = (gameboard) => {
    for (let i = 0; i < 10; i ++) {
        for (let j = 0; j < 10; j ++) {
           const cell = document.createElement("div");
           cell.setAttribute("data-coord", `${j},${i}`);
           cell.setAttribute("class", "cell");
           gameboard.appendChild(cell);
        }
    }
}

export const displayShips = (gameboard) => {
    for (const occupiedCells of gameboard.occupiedCells) {
       document.querySelectorAll(`.player-board [data-coord="${occupiedCells}"]`).forEach(cell => {
           cell.classList.add("has-ship");
        });
    }
}

export const updateBoards = (player) => {
    for (const missedCell of player.gameboard.missedCells) {
        console.log(missedCell);
        console.log(player.name);
        document.querySelectorAll(`.${player.name}-board [data-coord="${missedCell}"]`).forEach(cell => {
            cell.classList.add("missed");
         });
     }
     for (const hitCell of player.gameboard.hitCells) {
        console.log(hitCell);
        document.querySelectorAll(`.${player.name}-board [data-coord="${hitCell}"]`).forEach(cell => {
            cell.classList.add("hit");
         });
     }
}


