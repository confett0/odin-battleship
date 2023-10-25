import './style.css';
import { Gameboard } from './modules/gameboard';

const gameboard = new Gameboard("player1");

const ship = gameboard.createShip("Carrier", 5);
const secondShip = gameboard.createShip("Submarine", 3);

gameboard.placeShip(ship, [0,0], "vertical");
gameboard.placeShip(secondShip, [0,0], "horizontal");

console.log(gameboard.board);