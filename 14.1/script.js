"use strict";

//1. Use a constructor function to implement a "Car". A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`El ${this.make} acelera, y va a ${this.speed} km/h`);
};

//3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`El ${this.make} frena, y va a ${this.speed} km/h`);
};

//4. Create 2 "Car" objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate(); //130
car1.accelerate(); //140
car1.brake(); //135
car1.brake(); //130
car1.accelerate(); //140
car1.accelerate(); //150
car1.accelerate(); //160
car1.brake(); //155

car2.accelerate(); //105
car2.brake(); //100
