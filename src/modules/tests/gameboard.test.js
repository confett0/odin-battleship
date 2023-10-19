import { Gameboard } from "../gameboard";

describe('Gameboard', () => {

    it('should place ship in the given coordinates', () => {
      const gameboard = new Gameboard();
      gameboard.placeShip([0,0],[0,3]);
      expect(gameboard.board[0][2].hasShip).toBe(true);
    });

  });