import { Ship } from "./ship";
import { getRandomCoords, randomOrientation } from "./helper";

export class Gameboard {
  constructor() {
    this.board = Array(10)
      .fill()
      .map(() => Array(10).fill(null));

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = { ship: null };
      }
    }
    this.shipList = [
      { name: "Carrier", length: 5 },
      { name: "Battleship", length: 4 },
      { name: "Cruiser", length: 3 },
      { name: "Submarine", length: 3 },
      { name: "Destroyer", length: 2 },
    ];
    this.ships = [];
    this.hitCells = [];
    this.missedCells = [];
  }

  createShip(name, length) {
    const ship = new Ship(length, name);
    this.ships.push(ship);
    return ship;
  }

  placeShip(ship, startCoords, orientation) {
    const isOccupied = (x, y) => {
      if (x < 0 || x >= 10 || y < 0 || y >= 10) {
        return true; // Out of bounds is considered occupied
      }
      return this.board[x][y].ship !== null;
    };

    const [x, y] = startCoords;

    if (orientation === "horizontal") {
      for (let i = x; i < x + ship.length; i++) {
        if (isOccupied(i, y)) {
          return;
        }
      }
      for (let i = x; i < x + ship.length; i++) {
        this.board[i][y].ship = ship.name;
      }
    }

    if (orientation === "vertical") {
      for (let i = y; i < y + ship.length; i++) {
        if (isOccupied(x, i)) {
          return;
        }
      }
      for (let i = y; i < y + ship.length; i++) {
        this.board[x][i].ship = ship.name;
      }
    }
    return ship;
  }

  removeShip(ship) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.board[i][j].ship === ship.name) {
          this.board[i][j].ship = null;
        }
      }
    }
  }

  receiveAttack([x, y]) {
    if (this.missedCells.includes([x, y]) || this.hitCells.includes([x, y])) {
      return;
    }

    const shipName = this.board[x][y].ship;

    if (shipName !== null) {
      // Find the ship with the matching name
      const ship = this.ships.find((ship) => ship.name === shipName);

      // If a ship is found, increment its hit count
      if (ship) {
        ship.hit();
        this.hitCells.push([x, y]);
        if (ship.sunk) {
          return `The ${ship.name} is sunk!`;
        } else {
          return "It's a hit!";
        }
      }
    } else {
      this.missedCells.push([x, y]);
      return "It's a miss.";
    }
  }

  allSunk() {
    return this.ships.every((ship) => ship.sunk === true);
  }

  resetBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.board[i][j].ship = null;
      }
    }
    this.ships = [];
  }

  autoPopulateBoard() {
    const autoPlaceShip = (ships, index) => {
      if (index >= ships.length) {
        // All ships have been placed, exit recursion
        return;
      }

      const ship = ships[index];
      const startCoords = getRandomCoords();
      const orientation = randomOrientation();

      // Try to place the ship
      const result = this.placeShip(ship, startCoords, orientation);

      if (result) {
        autoPlaceShip(ships, index + 1);
      } else {
        autoPlaceShip(ships, index);
      }
    };

    this.shipList.forEach((ship) => this.createShip(ship.name, ship.length));
    autoPlaceShip(this.ships, 0); // Start placing ships with the first ship in the list
    console.log(this.board);
  }
}
