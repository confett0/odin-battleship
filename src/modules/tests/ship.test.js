import { Ship } from "../ship";

describe('Ship', () => {

    it('should increment hitsReceived by 1', () => {
      const ship = new Ship(3);
      ship.hit();
      expect(ship.hitsReceived).toBe(1);
    });

    it('should update the isSunk state after a number of hits equal to the ship length', () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        // ship.isSunk();
        expect(ship.sunk).toBe(true);
      });

      it('should not update the isSunk state if the ship is not sunk', () => {
        const ship = new Ship(3);
        ship.hit();
        ship.hit();
        // ship.isSunk();
        expect(ship.sunk).toBe(false);
      });
  });

