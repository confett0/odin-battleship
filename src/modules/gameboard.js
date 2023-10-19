import { Ship } from "./ship";

export class Gameboard {
    constructor(player) {
        this.player = player;
        this.board = Array(10).fill().map(() =>
            Array(10).fill({ ship: null, isHit: false }));
        this.ships = [];
    }

    placeShip(startCoords, endCoords, shipName) {
        if (startCoords[0] !== endCoords[0] && startCoords[1] !== endCoords[1]) return;

        const shipLength = Math.max((Math.abs(startCoords[0] - endCoords[0])), (Math.abs(startCoords[1] - endCoords[1]))) + 1;
        const ship = new Ship(shipLength, shipName);
        this.ships.push(ship);

        if (startCoords[1] === endCoords[1]) {
            for (let i = startCoords[0]; i <= shipLength; i++) {
                this.board[i][startCoords[1]].ship = ship.name;
            }
        }
        if (startCoords[0] === endCoords[0]) {
            for (let i = startCoords[1]; i <= shipLength; i++) {
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
}