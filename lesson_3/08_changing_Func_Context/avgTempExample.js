// let temperatures = [53, 86, 12, 43];

// function average(values) {
//   let total = 0;
//   let i;
//   for (i = values.length - 1; i >= 0; i -= 1) {
//     total += values[i];
//   }

//   return total / values.length;
// }

// console.log(average(temperatures));           // => 48.5

let temperatures = [53, 86, 12, 43];

function average() {
  let total = 0;
  let i;
  for (i = this.length - 1; i >= 0; i--) {
    total += this[i];
  }

  return total / this.length
}

console.log(average.call(temperatures));
console.log(average.apply(temperatures));

let displayAvgTemp = average.bind(temperatures);

// console.log(displayAvgTemp());

// temperatures.push(20);

// console.log(displayAvgTemp());

// temperatures.average = average;
// console.log(temperatures);
// console.log(temperatures.average())