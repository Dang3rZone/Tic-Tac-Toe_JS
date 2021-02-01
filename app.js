'use strict';
const xClass = 'x';
const circleClass = 'circle';
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cellElements = document.querySelectorAll('[data-cell');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector(
  '[data-winning-message-text]'
);
let circleTurn;

startGame();

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? circleClass : xClass;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    // console.log('winner winner chicken dinner');
    endGame(false);
  }
  //placeMark
  //CHECK FOR WIN
  //CHEACK FOR DRAW
  // SWITCH TURNS
  swapTurns();
  setBoardHoverClass();
}
function endGame(draw) {
  if (draw) {
  } else {
    winningMessageTextElement.innerText = `${
      circleTurn ? "O's" : "X's"
    } Wins! `;
  }
  winningMessageElement.classList.add('show');
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(xClass);
  board.classList.remove(circleClass);
  if (circleTurn) {
    board.classList.add(circleClass);
  } else {
    board.classList.add(xClass);
  }
}

function checkWin(currentClass) {
  return winningCombos.some((combos) => {
    return combos.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
