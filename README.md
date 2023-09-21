# OOP and Inheritance

## Lesson Objectives

To understand...

- Objects
- Classes
- Inheritance

## Intro

`Objects` and `classes` are both fundamental concepts in `object-oriented programming` (OOP) that are *widely used in JavaScript and many other programming languages*.

`Objects` are essentially collections of related data and functionality. They are defined using `key-value pairs`, where the key is a `string` (also known as a `property name`) and the value can be any data type, including other objects or functions. For example, an `object` representing a car might have properties like `make`, `model`, and `color`, as well as methods like `start` and `stop`.

`Classes`, on the other hand, *are like blueprints for creating objects*. They define a set of `properties` and `methods` that objects of that class will have. In JavaScript, classes were introduced in ECMAScript 2015 (ES6) and are defined using the `class` keyword. For example, a class representing a `car` might have properties like `make`, `model`, and `color`, and methods like `start` and `stop` that define how the `car` behaves.

`Inheritance` is a way of creating new `classes` that are based on existing ones. *It allows you to reuse code and define relationships between classes*. In JavaScript, `inheritance` is implemented using the `extends` keyword. For example, you might define a `subclass` of `Car` called `ElectricCar` that inherits all of the `properties` and `methods` of `Car`, but also has additional `properties` and `methods` specific to electric cars.

```js
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  start() {
    console.log(`Starting the ${this.color} ${this.make} ${this.model}...`);
  }

  stop() {
    console.log(`Stopping the ${this.color} ${this.make} ${this.model}...`);
  }
}

class ElectricCar extends Car {
  constructor(make, model, color, batterySize) {
    super(make, model, color);
    this.batterySize = batterySize;
  }

  charge() {
    console.log(`Charging the ${this.color} ${this.make} ${this.model} with a ${this.batterySize} kWh battery...`);
  }
}

const myCar = new Car('Honda', 'Civic', 'blue');
myCar.start(); // logs "Starting the blue Honda Civic..."

const myElectricCar = new ElectricCar('Tesla', 'Model S', 'red', 100);
myElectricCar.start(); // logs "Starting the red Tesla Model S..."
myElectricCar.charge(); // logs "Charging the red Tesla Model S with a 100 kWh battery..."
```

In this example, we define a base `class` called `Car` that has `properties` for `make`, `model`, and `color`, as well as `methods` for starting and stopping the car. We then define a `subclass` called `ElectricCar` that inherits from `Car` and has an additional `property` for battery size and a `method` for charging the car. Finally, we create `instances` of both `classes` and *call their `methods` to demonstrate how they work*.

## Resources

- [OOP - FreeCodeCamp](https://www.freecodecamp.org/news/how-javascript-implements-oop/)
- [JavaScript Classes - W3 Schools](https://www.w3schools.com/js/js_classes.asp)
- [Object-oriented programming - MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- [Classes in JavaScript - MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)