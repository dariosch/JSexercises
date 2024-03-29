"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Challenge: exercise 1
const [players1, players2] = game.players;
console.log(players1);

// Challenge: exercise 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// Challenge: exercise 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Challenge: exercise 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// Challenge: exercise 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Challenge: exercise 6
const printGoals = function (...players) {
  console.log(`${players.length} goles realizados`);
};
printGoals(...game.scored);

// Challenge: exercise 7
team1 < team2 && console.log(`El equipo ${game.team1} probablemente gane`);
team2 < team1 && console.log(`El equipo ${game.team2} probablemente gane`);
