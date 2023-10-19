import { Ship } from "./ship";

export class Gameboard {
    constructor(player) {
        this.player = player;
        this.board = Array(10).fill().map(() =>
            Array(10).fill({ ship: null, isHit: false }));
        this.ships = [];
    }

    placeShip([x, y], [a, b], shipName) {
        if (x !== a && y !== b) return;

        const shipLength = Math.max((Math.abs(x - a)), (Math.abs(y - b))) + 1;
        const ship = new Ship(shipLength, shipName);
        this.ships.push(ship);

        if (y === b) {
            for (let i = x; i <= shipLength; i++) {
                this.board[i][y].ship = ship.name;
            }
        }
        if (x === a) {
            for (let i = y; i <= shipLength; i++) {
                this.board[x][i].ship = ship.name;
            }
        }
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
}