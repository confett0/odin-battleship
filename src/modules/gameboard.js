import { Ship } from "./ship";
import { Player } from "./player";
import { getRandomCoords } from "./helper";

export class Gameboard {
    constructor(playerName) {
        this.player = new Player(playerName);
        this.board = Array(10).fill().map(() =>
            Array(10).fill({ ship: null, isHit: false }));
        this.ships = [];
    }

    createShip(name, length) {
        const ship = new Ship(length, name);
        this.ships.push(ship);
        return ship;
    }

    placeShip(ship, startCoords, orientation) {
        
        if (orientation === "horizontal") {
            for (let i = startCoords[0]; i <= ship.length; i++) {
                this.board[i][startCoords[1]].ship = ship.name;
            }
        }

        if (orientation === "vertical") {
            for (let i = startCoords[1]; i <= ship.length; i++) {
                this.board[startCoords[0]][i].ship = ship.name;
            }
        }

        return ship;
    }

    receiveAttack([x, y]) {
        if (this.board[x][y].isHit) {
            return;
        }

        this.board[x][y].isHit = true;
        
        const shipName = this.board[x][y].ship;
        
        if (shipName !== null) {
            // Find the ship with the matching name
            const ship = this.ships.find((ship) => ship.name === shipName);

            // If a ship is found, increment its hit count
            if (ship) {
                ship.hit();
            }
        }
    }

    // Gameboards should be able to report whether or not all of their ships have been sunk.
    allSunk() {
        return this.ships.every(ship => ship.sunk === true);
    }

    autoPopulate() {
        const startCoords = getRandomCoords();
    }
}