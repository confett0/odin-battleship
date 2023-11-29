import { game } from "./game";
import { toggleUI } from "./ui";

export const dragAndDrop = () => {
  
  const ships = document.querySelectorAll(".drag-ship");
  const cells = document.querySelectorAll(".cell");
  const startButton = document.querySelector(".start-game-button");
  
  ships.forEach((ship) => ship.addEventListener("dragstart", dragStart));

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
      e.target.classList.add("hidden");
    }, 0);
  }

  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragLeave(e) {
    e.target.classList.remove("drag-over");
  }

  function drop(e) {
    e.preventDefault();
    e.target.classList.remove("drag-over");

    const id = e.dataTransfer.getData("text/plain");
    const draggableShip = document.getElementById(id);
    const shipLength = +(draggableShip.getAttribute("data-length"));
    const coordX = +e.target.dataset.coordX;
    const coordY = +e.target.dataset.coordY;
    const ship = game.player.gameboard.createShip(id, shipLength);
    let shipOrientation = "horizontal";

    const changeOrientation = () => shipOrientation = (shipOrientation === "horizontal") ? "vertical" : "horizontal";

    game.player.gameboard.removeShip(ship); // remove ship from array in case of repositioning

    const result = game.player.gameboard.placeShip(ship, [coordX, coordY], shipOrientation);
    if (result) { // check if ship position is legal
      e.target.appendChild(draggableShip);
      draggableShip.classList.add("positioned-ship");
    }

    draggableShip.addEventListener("click", () => {
      changeOrientation();
      game.player.gameboard.removeShip(ship);
      const result = game.player.gameboard.placeShip(ship, [coordX, coordY], shipOrientation);
      if (result) {
        draggableShip.classList.toggle("vertical");
      } else {
        changeOrientation();
      }
    });

    // If all ships are positioned, activate Start Game button

    if (document.querySelectorAll(".draggable-ship-container .drag-ship").length === 0) {
      startButton.classList.remove("disabled-button");
      startButton.addEventListener("click", () => {
        toggleUI();
        game.start();
      });
    }
  }

 cells.forEach((cell) => {
    cell.addEventListener("dragenter", dragEnter);
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragleave", dragLeave);
    cell.addEventListener("drop", drop);
  });

};
