import { Ship } from "./ship";

export class Gameboard {
    constructor(player) {
        this.player = player;
        this.board = Array(10).fill().map(() => 
               Array(10).fill({hasShip: false, isHit: false}));
    }

    placeShip([x,y],[a,b]) {
        if (x !== a && y !== b) return;

        const shipLength = Math.max((Math.abs(x - a)),(Math.abs(y - b))) + 1;
        const ship = new Ship(shipLength);

        if (y === b) {
            for (let i = x; i <= shipLength; i++) {
            this.board[i][y].hasShip = true;
            }
        }
        if (x === a) {
            for (let i = y; i <= shipLength; i++) {
            this.board[x][i].hasShip = true;
            }
        }
    }
}