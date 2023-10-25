import './style.css';
import { Gameboard } from './modules/gameboard';

const gameboard = new Gameboard("player1");

gameboard.autoPopulateBoard();

console.log(gameboard.board);