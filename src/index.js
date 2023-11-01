import './style.css';
import { createBoardCells } from './modules/ui';
import { game } from './modules/game';

const gameboards = document.querySelectorAll(".gameboard");
gameboards.forEach(board => createBoardCells(board));

game.init();

const computerGameboard = document.querySelector(".computer-board");
computerGameboard.addEventListener("click", (e) => {
    if (e.target.className === "cell") {
        const x = +e.target.dataset.coordX;
        const y = +e.target.dataset.coordY;
        game.playRound([x,y]);
    }
})


