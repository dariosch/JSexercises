"use strict";

// Coding Challenge #4 OOP chapter

//1. Re-create challenge #3, but this time using ES6 Classes: create an 'EVCl' child class of the 'CarCl' class
//2. Make the 'charge' property private
//3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
//Test data: 'Tesla' going at 120km/h, with a charge of 23%

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(
      `The car ${this.make} is accelerating, and his speed is now ${speed} km/h`
    );
  }

  brake() {
    this.speed -= 5;
    console.log(
      `The car ${this.make} is braking, and his speed is now ${this.speed} km/h`
    );
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`The battery is now ${this.#charge}`);
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const tesla = new EVCl("Tesla", 120, 23);

tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate().brake();
