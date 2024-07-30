let car = {
  fuel: 7.9,
  mpg: 37,
};

// can express same code WITHOUT objects like
let fuel = 7.9;
let mgp = 37;

// as we need to track more vehicles and types, code needs to expand due to needing unique variables for each vehicle residing in the same scope
let smallCarFuel = 7.9;
let smallCarMpg = 37;
let largeCarFuel = 9.4;
let largeCarMpg = 29;
let truckFuel = 14.4;
let truckMpg = 23;

// Attempting to calculate vehicle travel distance is more tedious without objects
function vehicleRange(fuel, mpg) {
  return fuel * mpg;
}

vehicleRange(smallCarFuel, smallCarMpg); // 292.3
vehicleRange(largeCarFuel, largeCarMpg); // 272.6
vehicleRange(truckFuel, truckMpg);       // 331.2

// restructuring data in a way that resembles their relationships
// in this case, the relationship between the vehicles fuel and miles per gallon

let smallCar = {
  fuel: 7.9,
  mpg: 27,
};

let largeCar = {
  fuel: 9.4,
  mpg: 29,
};

let truck = {
  fuel: 14.4,
  mgp: 23,
}

// our function to caluclate a vehicles range is easier to manage as a result
function vehicleRange(vehicle) {
  return vehicle.fuel * vehicle.mpg;
}

vehicleRange(smallCar);     // 292.3
vehicleRange(largeCar);     // 272.6
vehicleRange(truck);        // 331.2

// taking Object Oriented Programming a step further we can inclued the function within our object; modifying the function name/parameter and using `this` within the body of the function
let smallCarObj = {
  fuel: 7.9,
  mpg: 37,
  range() {
    return this.fuel * this.mpg;
  },
};

smallCarObj.range();   // 292.3

// to reduce duplication of creating `range` in each object, we can use an Object Factory to create the objects!

function makeVehicle(fuel, mpg) {
  return {
    fuel,
    mpg,

    range() {
      return this.fuel * this.mpg;
    },
  };
}

// now we can use the above object factory to create our objects!

let newSmallCar = makeVehicle(7.9, 37);
console.log(newSmallCar.range());

let newLargeCar = makeVehicle(9.2, 29);
console.log(newLargeCar.range());

let newTruck = makeVehicle(14.4, 23);
console.log(newTruck.range());