"use strict";

//1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
//2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
//3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`El ${this.make} acelera, y va a ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`El ${this.make} frena, y va a ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

//4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

const car1 = new CarCl("Ford", 120);
car1.accelerate();
car1.brake();
car1.brake();
console.log(car1.speedUS);
car1.speedUS = 50;
console.log(car1.speedUS);

//Test data: 'Ford' going at 120km/h
