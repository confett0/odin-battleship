import './style.css';
import { createBoardCells } from './modules/ui';
// import { playGame } from './modules/game';

const gameboards = document.querySelectorAll(".gameboard");
gameboards.forEach(board => createBoardCells(board));
