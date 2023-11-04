import { game } from "./game";

const createBoardCells = (gameboard) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("data-coord-x", `${j}`);
      cell.setAttribute("data-coord-y", `${i}`);
      cell.setAttribute("class", "cell");
      gameboard.appendChild(cell);
    }
  }
};

export const displayGameboards = () => {
  const gameboards = document.querySelectorAll(".gameboard");
  gameboards.forEach((board) => createBoardCells(board));
};

export const displayShips = (gameboard) => {
  for (const occupiedCells of gameboard.occupiedCells) {
    document
      .querySelectorAll(
        `.player-board [data-coord-x="${occupiedCells[0]}"][data-coord-y="${occupiedCells[1]}"]`
      )
      .forEach((cell) => {
        cell.classList.add("has-ship");
      });
  }
};

export const addEventListeners = () => {
  const computerGameboard = document.querySelector(".computer-board");
  computerGameboard.addEventListener("click", (e) => {
    if (e.target.className === "cell" && game.playerTurn && game.isGameOn) {
      const x = +e.target.dataset.coordX;
      const y = +e.target.dataset.coordY;
      game.playRound([x, y]);
    }
  });
};

export const updateBoards = (player) => {
  for (const missedCell of player.gameboard.missedCells) {
    document
      .querySelectorAll(
        `.${player.name}-board [data-coord-x="${missedCell[0]}"][data-coord-y="${missedCell[1]}"]`
      )
      .forEach((cell) => {
        cell.classList.add("missed");
      });
  }
  for (const hitCell of player.gameboard.hitCells) {
    document
      .querySelectorAll(
        `.${player.name}-board [data-coord-x="${hitCell[0]}"][data-coord-y="${hitCell[1]}"]`
      )
      .forEach((cell) => {
        cell.classList.add("hit");
      });
  }
};

export const displayMessages = (message, player) => {
  const messageBoard = document.querySelector(".message-board");
  if (player === "player") {
    messageBoard.innerText = `You fire into enemy waters... ${message}`;
  } else if (player === "computer") {
    messageBoard.innerText = `The enemy fires into your waters... ${message}`;
  }
};

export const openWinnerModal = (winner) => {
  const modalContent = document.querySelector(".winner-modal-content");
  const winnerText = document.querySelector("winner-text");
  const winnerModal = document.querySelector(".winner-modal");
  winnerModal.classList.add("visible");

  if (winner === game.player) {
    winnerText.innerText = "You win!";
  }
  if (winner === game.computer) {
    modalContent.style.background = "url('images/loser-bg.jpeg') no-repeat center";
    winnerText.innerText = "You lose!";
  }
}

export const closeWinnerModal = () => {
  const winnerModal = document.querySelector(".winner-modal");
  winnerModal.classList.remove("visible");
}
