"use strict";

const poll = {
  question: "What is your favourite color?",
  respuestas: ["0: Amarillo", "1: azul", "2: blanco", "3: verde"],
  contadorResp: [0, 0, 0, 0],
  registerNewAnswer() {
    const respUser = Number(
      prompt(`${this.question}\n ${this.respuestas.join("\n")}`)
    );
    typeof respUser === "number" &&
      respUser < this.contadorResp.length &&
      this.contadorResp[respUser]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.contadorResp);
    } else if (type === "string") {
      console.log(`Poll results are ${this.contadorResp.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ contadorResp: [5, 2, 3] }, "string");
poll.displayResults.call({ contadorResp: [1, 5, 3, 9, 6, 1] });
