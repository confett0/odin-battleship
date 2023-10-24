import { getRandomCoords } from "./helper";

export class Player {
    constructor(name) {
        this.name = name;
    }

    // turn ?
}

export class Computer extends Player {
    constructor() {
        super();
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