class Gameboard {
    constructor(player) {
        this.player = player;
        board = Array.from(Array(10), () => new Array(10));
    }
}

module.exports = Gameboard;