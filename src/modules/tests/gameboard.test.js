import { Gameboard } from "../gameboard";

describe('Gameboard', () => {

    it('should place ship in the given coordinates horizontally', () => {
      const gameboard = new Gameboard();
      gameboard.placeShip([0,0],[3,0]);
      expect(gameboard.board[2][0].hasShip).toBe(true);
    });

    it('should place ship in the given coordinates vertically', () => {
        const gameboard = new Gameboard();
        gameboard.placeShip([2,2],[2,4]);
        expect(gameboard.board[2][3].hasShip).toBe(true);
      });
    
      it('should records the coordinates of a missed shot', () => {
        const gameboard = new Gameboard();
        gameboard.receiveAttack([3,7]);
        expect(gameboard.board[3][7].isHit).toBe(true);
      });
    

  });