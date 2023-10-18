class Ship {
    constructor(length) {
        this.length = length;
        this.hitsReceived = 0;
        this.sunk = false;
    }

    hit() {
        this.hitsReceived++;
    }

    isSunk() {
        if (this.hitsReceived === this.length) {
            this.sunk = true;
        }
    }
}

module.exports = Ship;