"use strict";

// Selecciono elementos primero
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); //works exactly the same, apparently faster than querySelector
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let scoreActual0 = document.getElementById("current--0");
let scoreActual1 = document.getElementById("current--1");
let scoreActual = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden"); //oculte el dado

//rodar el dado

btnRoll.addEventListener("click", function () {
  const nroRandom = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${nroRandom}.png`;

  if (nroRandom !== 1) {
    //add dice to current score
    scoreActual += nroRandom;
    scoreActual0.textContent = scoreActual;
  }
});
