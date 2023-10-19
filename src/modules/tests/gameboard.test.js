import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

describe('Gameboard', () => {

    it('should place ship in the given coordinates horizontally', () => {
      const gameboard = new Gameboard();
      gameboard.placeShip([0,0],[3,0], "Battleship");
      expect(gameboard.board[2][0].ship).toBe("Battleship");
    });

    it('should place ship in the given coordinates vertically', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip([2,2],[2,4], "Destroyer");
        expect(gameboard.board[2][3].ship).toBe("Destroyer");
      });
    
      it('should records the coordinates of a missed shot', () => {
        const gameboard = new Gameboard();
        gameboard.receiveAttack([3,7]);
        expect(gameboard.board[3][7].isHit).toBe(true);
      });

      it('should increment the hit count of the correct ship', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip([3,3],[3,5], "Submarine");
        const placedShip = gameboard.ships.find((ship) => ship.name === "Submarine");
        gameboard.receiveAttack([3,3]);
        expect(placedShip.hitsReceived).toBe(1);
      });
    

  });