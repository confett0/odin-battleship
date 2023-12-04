export class Ship {
    constructor(length, name) {
        this.name = name;
        this.length = length;
        this.hitsReceived = 0;
        this.sunk = false;
    }

    hit() {
        this.hitsReceived++;
        this.isSunk();
    }

    isSunk() {
        if (this.hitsReceived === this.length) {
            this.sunk = true;
        }
    }
}