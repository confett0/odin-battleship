import { game } from "./game";

export const dragAndDrop = () => {
  const changeAxisButton = document.querySelector(".set-axis");
  changeAxisButton.addEventListener("click", () => {
    changeAxisButton.innerText === "Axis: horizontal"
      ? (changeAxisButton.innerText = "Axis: vertical")
      : (changeAxisButton.innerText = "Axis: horizontal");
  });
  const ships = document.querySelectorAll(".drag-ship");
  ships.forEach((ship) => ship.addEventListener("dragstart", dragStart));

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    if (changeAxisButton.innerText === "Axis: vertical") {
      e.target.classList.add("vertical");
    } else {
      e.target.classList.remove("vertical");
    }
    setTimeout(() => {
      e.target.classList.add("hidden");
    }, 0);
  }

  // Drop targets
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("dragenter", dragEnter);
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragleave", dragLeave);
    cell.addEventListener("drop", drop);
  });

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
    const shipLength = draggableShip.getAttribute("data-length");
    const gridLength = 10;

    const ship = game.player.gameboard.createShip(id, +shipLength);

    if (draggableShip.classList.contains("vertical")) {
      if (e.target.dataset.coordY <= gridLength - shipLength) {
        e.target.appendChild(draggableShip);
        draggableShip.classList.add("positioned-ship");
        game.player.gameboard.placeShip(
          ship,
          [+e.target.dataset.coordX, +e.target.dataset.coordY],
          "vertical"
        );
      }
    } else {
      if (e.target.dataset.coordX <= gridLength - shipLength) {
        e.target.appendChild(draggableShip);
        draggableShip.classList.add("positioned-ship");
        game.player.gameboard.placeShip(
          ship,
          [+e.target.dataset.coordX, +e.target.dataset.coordY],
          "horizontal"
        );
      }
    }

    console.log(game.player.gameboard.board);
  }
};
