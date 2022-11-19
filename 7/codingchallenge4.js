"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 4 - DOM & Events
/*
Implement a game rest functionality, so that the player can make a new guess!

Tasks:
1- Select the element with the 'again' class and attach a click event handler
2- In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3- Restore the initial conditions of the message, number, score and guess input fields.
4- Also restore the original background color (#222) and number width (15rem)
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".score").textContent = score;
document.querySelector(".guess").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Ingresa un numero";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Adivinaste!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Muy alto!";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "Muy bajo!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
