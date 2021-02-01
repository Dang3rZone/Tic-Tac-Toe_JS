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
const restartBtn = document.getElementById('restartButton');
const winningMessageTextElement = document.querySelector(
  '[data-winning-message-text]'
);
let circleTurn;
