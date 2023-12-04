import { Gameboard } from "./gameboard";
import { getRandomCoords } from "./helper";

export class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
    }
}

export class Computer extends Player {
    constructor(name) {
        super();
        this.name = name;
        this.moves = [];
    }
    attack() {
        const randomCoords = getRandomCoords();
        if (!this.moves.includes(randomCoords)) {
            this.moves.push(randomCoords);
            return randomCoords;
        } else {
            this.attack();
        }
    }
}