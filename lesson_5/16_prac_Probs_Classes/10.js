class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels
  }

  info() {
    return `${this.make} ${this.model}`
  }

  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }

  // getWheels() {
  //   return 4;
  // }
  
  // info() {
  //   return `${this.make} ${this.model}`;
  // }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }

  // getWheels() {
  //   return 2;
  // }

  // info() {
  //   return `${this.make} ${this.model}`;
  // }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }

  // getWheels() {
  //   return 6;
  // }

  // info() {
  //   return `${this.make} ${this.model}`
  // }
}

let car = new Car('Honda', 'Civic');
let motorcycle = new Motorcycle('Suzuki', 'Hayabusa');
let truck = new Truck('Ford', 'F150', 2000);

console.log(car.getWheels());
console.log(motorcycle.getWheels());
console.log(truck.getWheels());

console.log(car.info());
console.log(motorcycle.info());
console.log(truck.info());

console.log(car);
console.log(motorcycle);
console.log(truck);