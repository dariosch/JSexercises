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

document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Ingresa un numero";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Adivinaste! 🙌";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score == 1) {
      document.querySelector(".message").textContent =
        "GAME OVER 😪 Clickea en Otra vez para reiniciar!";
      document.querySelector(".guess").disabled = true;
      document.querySelector("body").style.backgroundColor = "#a30e0e";
      document.querySelector(".number").textContent = secretNumber;
    } else {
      document.querySelector(".message").textContent = "Muy alto!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    if (score == 1) {
      document.querySelector(".message").textContent =
        "GAME OVER 😪 Clickea en Otra vez para reiniciar!";
      document.querySelector(".guess").disabled = true;
      document.querySelector("body").style.backgroundColor = "#a30e0e";
      document.querySelector(".number").textContent = secretNumber;
    } else {
      document.querySelector(".message").textContent = "Muy bajo!";
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
