import { Ship } from "./ship";

export class Gameboard {
    constructor(player) {
        this.player = player;
        this.board = Array(10).fill().map(() => 
               Array(10).fill({hasShip: false, isHit: false}));
    }

    placeShip([x,y],[a,b]) {
        const length = Math.max((Math.abs(x - a)),(Math.abs(y - b))) + 1;
        const ship = new Ship(length);
    }
}