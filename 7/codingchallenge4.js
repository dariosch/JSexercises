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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("Ingresa un numero");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Adivinaste! 🙌");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score == 1) {
      displayMessage("GAME OVER 😪 Clickea en Otra vez para reiniciar!");
      document.querySelector(".guess").disabled = true;
      document.querySelector("body").style.backgroundColor = "#a30e0e";
      document.querySelector(".number").textContent = secretNumber;
    } else {
      displayMessage(guess > secretNumber ? "Muy alto!" : "Muy bajo!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").disabled = false;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Empeza a adivinar";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
