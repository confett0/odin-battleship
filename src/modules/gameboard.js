import { Ship } from "./ship";

export class Gameboard {
    constructor(player) {
        this.player = player;
        this.board = Array(10).fill().map(() =>
            Array(10).fill({ ship: null, isHit: false }));
    }

    placeShip([x, y], [a, b], shipName) {
        if (x !== a && y !== b) return;

        const shipLength = Math.max((Math.abs(x - a)), (Math.abs(y - b))) + 1;
        const ship = new Ship(shipLength, shipName);

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
        // determines whether the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot
        this.board[x][y].isHit = true;
    }
}