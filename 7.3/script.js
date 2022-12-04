"use strict";

// Selecciono elementos primero
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); //works exactly the same, apparently faster than querySelector
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let scoreActual0 = document.getElementById("current--0");
let scoreActual1 = document.getElementById("current--1");
let scoreActual = 0;
let activePlayer = 0;
const scores = [0, 0]; //final scores. an array for each score of players
let playing = true;

function inicio() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden"); //oculte el dado
}

inicio();

//rodar el dado

btnRoll.addEventListener("click", function () {
  if (playing) {
    const nroRandom = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${nroRandom}.png`;

    if (nroRandom !== 1) {
      //add dice to current score
      scoreActual += nroRandom;
      document.getElementById(`current--${activePlayer}`).textContent =
        scoreActual; //elijo dinamicamente a cual jugador asignarle los puntos
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      cambioJugador();
    }
  }
});

function cambioJugador() {
  if (activePlayer === 0) {
    score0El.textContent = scores[0];
  } else {
    score1El.textContent = scores[1];
  }
  player0El.classList.toggle("player--active"); //toggle agrega si no esta y saca si si esta
  player1El.classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  scoreActual = 0;
}

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += scoreActual;
    // si tiene 100 puntos o mas gana
    if (scores[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
      playing = false;
    } else {
      cambioJugador();
    }
  }
});

btnNew.addEventListener("click", function () {
  inicio();
  scores[0] = 0;
  scores[1] = 0;
  scoreActual = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  scoreActual1.textContent = 0;
  scoreActual0.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  playing = true;
});
