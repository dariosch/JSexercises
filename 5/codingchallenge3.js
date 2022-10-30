"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 3 - Developer Skills & Editor setup
/*
Given an array of max temps, we should give back a string with the temps in next days
*/

function printForecast(temps) {
  let aux = "";
  for (let i = 0; i < temps.length; i++) {
    aux += `${temps[i]}°C in ${i + 1} days ... `;
  }
  return aux;
}

console.log(printForecast([17, 21, 23]));
