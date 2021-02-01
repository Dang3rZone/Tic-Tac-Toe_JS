'use strict';
const xClass = 'x';
const circleClass = 'circle';
const cellElements = document.querySelectorAll('[data-cell');
let circleTurn;

cellElements.forEach((cell) => {
  cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? circleClass : xClass;
  placeMark(cell, currentClass);
  //placeMark
  //CHECK FOR WIN
  //CHEACK FOR DRAW
  // SWITCH TURNS
  swapTurns();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}
