import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

describe('Gameboard', () => {

    it('should place ship in the given coordinates horizontally', () => {
      const gameboard = new Gameboard();
      const battleship = gameboard.createShip("Battleship", 4);
      gameboard.placeShip(battleship, [0,0], "horizontal");
      expect(gameboard.board[2][0].ship).toBe("Battleship");
    });

    it('should place ship in the given coordinates vertically', () => {
        const gameboard = new Gameboard();
        const destroyer = gameboard.createShip("Destroyer", 3);
        gameboard.placeShip(destroyer, [2,2], "vertical");
        expect(gameboard.board[2][3].ship).toBe("Destroyer");
      });
    
      it('should records the coordinates of a missed shot', () => {
        const gameboard = new Gameboard();
        gameboard.receiveAttack([3,7]);
        expect(gameboard.board[3][7].isHit).toBe(true);
      });

      it('should increment the hit count of the correct ship', () => {
        const gameboard = new Gameboard();
        const submarine = gameboard.createShip("Submarine", 3)
        gameboard.placeShip(submarine, [3,3], "horizontal");
        gameboard.receiveAttack([3,3]);
        expect(submarine.hitsReceived).toBe(1);
      });

  });