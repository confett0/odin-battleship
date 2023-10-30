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


