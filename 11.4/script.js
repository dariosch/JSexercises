"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 376.72, owners: ["Michael"] },
];

// Task 1

function loopeado(dogs) {
  dogs.forEach((dog) => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
}

loopeado(dogs);
console.log(dogs);

// Task 2

const comoCome = (dogs, owner) => {
  const dog1 = dogs.find((dog) => dog.owners.includes(owner));
  return `This dog is eating ${
    dog1.curFood < dog1.recommendedFood * 0.9
      ? "too little"
      : dog1.curFood > dog1.recommendedFood * 1.1
      ? "too much"
      : "ok!"
  }`;
};

console.log(comoCome(dogs, "Sarah"));

// Task 3

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooLittle);

// Task 4

const eatTooMuch = ownersEatTooMuch
  .join(" and ")
  .concat("'s dogs eat too much!");
console.log(eatTooMuch);

const eatTooLittle = ownersEatTooLittle
  .join(" and ")
  .concat("'s dogs eat too little!");
console.log(eatTooLittle);

// Task 5

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// Task 6

const checkDogEatingOk = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkDogEatingOk));

// Task 7

console.log(dogs.filter(checkDogEatingOk));

// Task 8

const dogsOrdered = dogs
  .slice()
  .sort((d1, d2) => d1.recommendedFood - d2.recommendedFood);

console.log(dogsOrdered);
