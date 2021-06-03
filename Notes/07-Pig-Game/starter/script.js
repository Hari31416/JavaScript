'use strict';
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.querySelector('#score--1');
const currentPlayer0 = document.querySelector('#current--0');
const currentPlayer1 = document.querySelector('#current--1');

let score, currentScore, active, playing;
const start = function () {
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  score = [0, 0];
  currentScore = 0;
  dice.classList.add('hidden');
  active = 0;
  playing = true;
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.getElementById(`name--0`).textContent = 'Player 1';
  document.getElementById(`name--1`).textContent = 'Player 2';
};

let switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${active}`).textContent = currentScore;
  active = active === 0 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
};
start();
//Rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generating the random number then showing the dice
    let diceNum = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`;

    //If it does not roll one
    if (diceNum !== 1) {
      currentScore += diceNum;
      document.querySelector(`#current--${active}`).textContent = currentScore;
    } else {
      //   If it rolls one
      switchPlayer();
    }
  }
});

// Hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    score[active] += currentScore;
    document.querySelector(`#score--${active}`).textContent = score[active];
    if (score[active] >= 20) {
      dice.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--winner');
      document.getElementById(`name--${active}`).textContent = 'You Won!';
      document.querySelector(`#current--${active}`).textContent = 0;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', start);
