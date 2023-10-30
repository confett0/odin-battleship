export const createBoardCells = (gameboard) => {
    for (let i = 0; i < 10; i ++) {
        for (let j = 0; j < 10; j ++) {
           const cell = document.createElement("div");
           cell.setAttribute("id", `${i},${j}`);
           gameboard.appendChild(cell);
        }
    }
}


