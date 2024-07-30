function makeCar(accelRate, breakRate) {

  return {
    speed: 0,
    accelRate,
    breakRate,

    accelerate() {
      this.speed += this.rate;
    },

    breakOneSecond() {
      this.speed -= this.breakRate;
      if (this.speed <= 0) this.speed = 0;
    },
  };
}

let hatchback = makeCar(9, 6);

console.log(hatchback);
hatchback.accelerate();
console.log(hatchback);

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.breakOneSecond();
console.log(sedan.speed);
sedan.breakOneSecond();
console.log(sedan.speed);