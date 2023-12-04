import { game } from "./game";
import { Ship } from "./ship";

const createBoardCells = (gameboard) => {
  gameboard.innerHTML = "";
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

export const displayGameboard = (playerBoard) => {
  const gameboard = document.querySelector(`.${playerBoard}-board`);
  createBoardCells(gameboard);
};

export const createDraggableShips = () => {
  const shipList = game.player.gameboard.shipList;
  const container = document.querySelector(".draggable-ship-container");
  container.innerHTML = "";

  const createShip = (ship) => {
    const shipWrap = document.createElement("div");
    const shipName = document.createElement("h3");
    const dragShip = document.createElement("div");


    shipWrap.setAttribute("class", "ship-wrap");
    shipName.textContent = ship.name;
    dragShip.setAttribute("class", "drag-ship");
    dragShip.setAttribute("id", ship.name);
    dragShip.setAttribute("data-length", ship.length);
    dragShip.setAttribute("draggable", "true");

    for (let i = 0; i < ship.length; i++) {
      const dragShipCell = document.createElement("div");
      dragShipCell.classList.add("drag-ship-cell", "cell");
      dragShip.appendChild(dragShipCell);
    }

    shipWrap.append(shipName, dragShip);
    container.appendChild(shipWrap);
  }

  shipList.map(ship => createShip(ship));
  
}

export const toggleUI = () => { // switches from the drag and drop UI to the battle UI
  const computerBoardContainer = document.querySelector(".computer-wrap");
  const messageBoard = document.querySelector(".message-board");
  const dragAndDropContainer = document.querySelector(".drag-and-drop-wrap");

  computerBoardContainer.classList.toggle("hidden");
  messageBoard.classList.toggle("hidden");
  dragAndDropContainer.classList.toggle("hidden");
}

export const displayShips = () => {
  const board = game.player.gameboard.board;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (board[j][i].ship !== null) {
        document.querySelector(`.player-board [data-coord-x="${j}"][data-coord-y="${i}"]`).classList.add("has-ship");
      } else {
        document.querySelector(`.player-board [data-coord-x="${j}"][data-coord-y="${i}"]`).classList.remove("has-ship");
      }
    }
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
  const winnerText = document.querySelector(".winner-text");
  const winnerModal = document.querySelector(".winner-modal");
  const newGameButton = document.querySelector(".new-game-button");

  winnerModal.classList.add("visible");

  if (winner === game.player) {
    winnerText.innerText = "You win!";
  }
  if (winner === game.computer) {
    modalContent.style.background = "url('images/loser-bg.jpeg') no-repeat center";
    winnerText.innerText = "You lose!";
  }

  newGameButton.addEventListener("click", () => {
    winnerModal.classList.remove("visible");
    game.resetGame();
    game.setUp();
  })
}