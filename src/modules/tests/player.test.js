import { Player } from "../player";
import { Computer } from "../player";

describe('Computer', () => {

    it('should return a pair of coordinates when the attack function is called', () => {
      const computer = new Computer();
      const coordinates = computer.attack();
      expect(typeof coordinates[0]).toBe("number");
    });

    it('should return a pair of coordinates greater than 0', () => {
        const computer = new Computer();
        const coordinates = computer.attack();
        expect(coordinates[0]).toBeGreaterThanOrEqual(0);
      });

      it('should return a pair of coordinates lesser than 10', () => {
        const computer = new Computer();
        const coordinates = computer.attack();
        expect(coordinates[1]).toBeLessThan(10);
      });
})