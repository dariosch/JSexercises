"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const strArray = document
    .querySelector("textarea")
    .value.toLowerCase()
    .split(`\n`);
  console.log(strArray);
  let counter = 1;
  for (let palabra of strArray) {
    let [primera, segunda] = palabra.split("_");
    primera = primera.trim();
    segunda = segunda.trim();
    segunda = segunda[0].toUpperCase() + segunda.slice(1);
    palabra = primera + segunda;
    console.log(palabra.padEnd(20, " ") + "✅".repeat(counter));
    counter++;
  }
});

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93755109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis12312312312;12:30";
/*
 🔴 Delayed Departure from FAO to TXL at 11:25
 🛫 Arrival from BRU to FAO at 11:45
 🔴 Delayed Arrival from HEL to FAO at 12:05
 🛫 Departure from FAO to LIS at 12:30
*/

const flightsArray = flights.split("+");
for (const flight of flightsArray) {
  let [tipo, origen, destino, horario] = flight.split(";");
  let texto;
  //tipo.startsWith("delayed") ? (texto = "🔴 ") : "🛫 ";
  let tipoCurada = tipo.replaceAll("_", " ").slice(1);
  let tipoArray = tipoCurada.split(" ");
  tipoCurada.startsWith("Delayed") ? (texto = "🔴 ") : (texto = "🛫 ");
  texto +=
    tipoCurada +
    " from " +
    origen.slice(0, 3).toUpperCase() +
    " to " +
    destino.slice(0, 3).toUpperCase() +
    " at " +
    horario;
  console.log(texto);
}
