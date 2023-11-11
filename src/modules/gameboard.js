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
    this.occupiedCells = [];
    this.hitCells = [];
    this.missedCells = [];
  }

  createShip(name, length) {
    const ship = new Ship(length, name);
    this.ships.push(ship);
    return ship;
  }

  placeShip(ship, startCoords, orientation) {
    const [x, y] = startCoords;
  
    if (orientation === "horizontal") {
      console.log(x,y, ship.length);
      for (let i = x; i < x + +ship.length; i++) {
        try {
          if (!this.board[i][y].ship) {
            this.board[i][y].ship = ship.name;
            this.occupiedCells.push([i, y]);
          } else {
            console.error(`Cell at [${i}, ${y}] is already occupied.`);
            return; // Ship placement failed
          }
        } catch (error) {
          console.error(`Error placing ship at [${i}, ${y}].`, error);
          return; // Ship placement failed
        }
      }
    }
  
    if (orientation === "vertical") {
      for (let i = y; i < y + ship.length; i++) {
        try {
          if (!this.board[x][i].ship) {
            this.board[x][i].ship = ship.name;
            this.occupiedCells.push([x, i]);
          } else {
            console.error(`Cell at [${x}, ${i}] is already occupied.`);
            return; // Ship placement failed
          }
        } catch (error) {
          console.error(`Error placing ship at [${x}, ${i}].`, error);
          return; // Ship placement failed
        }
      }
    }
  
    console.log(`Ship ${ship.name} placed successfully.`);
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

  // Check if all ships have been sunk.
  allSunk() {
    return this.ships.every((ship) => ship.sunk === true);
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
        // If the placement was successful, move on to the next ship
        autoPlaceShip(ships, index + 1);
      } else {
        // If placement failed, try again for the same ship
        autoPlaceShip(ships, index);
      }
    };

    this.shipList.forEach((ship) => this.createShip(ship.name, ship.length));
    autoPlaceShip(this.ships, 0); // Start placing ships with the first ship in the list
  }
}
