"use strict";

let dogsJulia = [3, 5, 2, 12, 7];
let dogsJulia2 = [9, 16, 6, 8, 3];
let dogsKate = [4, 1, 15, 8, 3];
let dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (array1, array2) {
  let dogs2 = array1.slice(1, -2);
  //puedo usar el splice method para que se utilice sobre el nuevo
  //dogs2 = array1.slice();
  //dogs2 = dogs2.splice(1,3);
  //dogs2 = dogs2.splice(-2);
  let todos = dogs2.concat(array2);
  todos.forEach(function (perro, i, a) {
    console.log(
      `Dog number ${i + 1} is ${
        perro >= 3 ? "an adult" : "still a Puppy 🐶"
      } and is ${perro} years old.`
    );
  });
};

//checkDogs(dogsJulia2, dogsKate2);

// Challenge 2 >> Calculate dog ages to human ages and average age of set of dogs

const humanAge = function (array1) {
  return array1.map((dogAge) => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4));
};

console.log(humanAge(dogsJulia));

const filterAge = (array1) => array1.filter((edad) => edad >= 18);

console.log(filterAge(humanAge(dogsJulia)));

const averageAge = function (array1) {
  const total = array1.reduce(function (acc, act) {
    return acc + act;
  }, 0);
  return total / array1.length;
};

console.log(averageAge(filterAge(humanAge(dogsJulia))));

// Sin tanta funcion, con los metodos, resolviendo asi el Challenge 3:

const calcAverageHumanAge = function (array1) {
  return array1
    .map((dogAge) => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter((edad) => edad >= 18)
    .reduce(function (acc, act, i, aux) {
      return acc + act / aux.length;
    }, 0);
};

console.log(calcAverageHumanAge(dogsJulia));
