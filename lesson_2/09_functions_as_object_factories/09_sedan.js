// All cars start out not moving, and sedans
// can accelerate about 8 miles per hour per second (mph/s).
let sedan = {
  speed: 0,
  rate: 8,

  // To accelerate, add the rate of acceleration
  // to the current speed.
  // Method definition syntax prior to ES6
  // accelerate: function() {
  //   this.speed += this.rate;
  // },

  // NEW ES6 Method definition syntax
  accelerate() {
    this.speed += this.rate;
  },
};

console.log(sedan.speed);
sedan.accelerate();
console.log(sedan.speed);