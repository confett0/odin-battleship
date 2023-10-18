class Ship {
    constructor(length) {
        this.length = length;
        this.hitsReceived = 0;
        this.isSunk = false;
    }

    hit() {
        this.hitsReceived++;
    }

    isSunk() {}
}

module.exports = Ship;