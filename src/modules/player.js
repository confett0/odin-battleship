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
        const getRandomNumber = () => Math.floor(Math.random() * 10);
        const a = getRandomNumber();
        const b = getRandomNumber();
        if (!this.moves.includes([a, b])) {
            this.moves.push([a,b]);
            return [a, b]
        } else {
            this.attack();
        }
    }
}