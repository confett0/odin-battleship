import './style.css';
import { createBoardCells } from './modules/ui';
import { game } from './modules/game';

const gameboards = document.querySelectorAll(".gameboard");
gameboards.forEach(board => createBoardCells(board));

game.init();
