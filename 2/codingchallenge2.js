"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 2.1
/*
Two teams competes 3 times each. A team only wins if it has at least double the avg score of the other team. Otherwise, no team wins! Ignore draws in coding this time.
*/

const avg = (resultados) => {
  let suma = 0;
  for (let i = 0; i < resultados.length; i++) {
    suma += resultados[i];
  }
  return suma / resultados.length;
};

function checkWinner(avg1, avg2) {
  if (avg1 > 2 * avg2) {
    console.log("Equipo 1 gana ".concat(avg1, " vs. ", avg2));
  } else if (avg2 > 2 * avg1) {
    console.log("Equipo 2 gana ".concat(avg2, " vs. ", avg1));
  } else console.log("Ninguno gano por la diferencia requerida");
}

console.log("Coding challenge 2.1");
checkWinner(avg([44, 23, 71]), avg([65, 54, 49]));
checkWinner(avg([85, 54, 41]), avg([23, 34, 27]));
console.log("--------------------------------------");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 2.2
/*
Same as coding challenge 1.4, a tip calculator (Between 50 and 300 its 15%. Otherwise its 20%) but passing an array instead of a unique value
*/

const tips = (bills) => {
  const auxTips = [];
  for (let i = 0; i < bills.length; i++) {
    bills[i] >= 50 && bills[i] <= 300
      ? auxTips.push(bills[i] * 0.15)
      : auxTips.push(bills[i] * 0.2);
  }
  return auxTips;
};

function decorador(bills) {
  const tipp = tips(bills);
  for (let i = 0; i < bills.length; i++) {
    console.log(
      "The bill number ".concat(
        i + 1,
        " was $ ",
        bills[i],
        ", the tip was $ ",
        tipp[i],
        " and the total was $ ",
        bills[i] + tipp[i]
      )
    );
  }
}
console.log("Coding challenge 2.2");
decorador([125, 555, 44]);
console.log("--------------------------------------");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 2.3
/*
Same as coding challenge 1.2, a comparator of BMIs but this time using objects to implement calculations
*/

const persona = {
  nombre: "",
  apellido: "",
  mass: 0,
  heigth: 0,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

const mark = {
  nombre: "Mark",
  apellido: "Miller",
  mass: 78,
  heigth: 1.69,
  calcBMI: function () {
    return this.mass / (this.heigth * this.heigth);
  },
};
const john = {
  nombre: "John",
  apellido: "Smith",
  heigth: 1.95,
  mass: 92,
  calcBMI: function () {
    return this.mass / (this.heigth * this.heigth);
  },
};

function decoratorBMI(persona1, persona2) {
  const bmi1 = persona1.calcBMI();
  const bmi2 = persona2.calcBMI();
  console.log(bmi1, bmi2);
  bmi1 > bmi2
    ? console.log(
        persona1.nombre.concat(
          "'s BMI (",
          bmi1,
          ") is higher than ",
          persona2.nombre,
          "'s (",
          bmi2,
          ")!"
        )
      )
    : bmi2 > bmi1
    ? console.log(
        persona2.nombre.concat(
          "'s BMI (",
          bmi2,
          ") is higher than ",
          persona1.nombre,
          "'s (",
          bmi1,
          ")!"
        )
      )
    : console.log("Both have same BMI!");
}

console.log("Coding challenge 2.3");
decoratorBMI(mark, john);
console.log("--------------------------------------");
