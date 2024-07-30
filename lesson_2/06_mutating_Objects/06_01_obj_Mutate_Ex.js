function increment(thing) {
  thing.count += 1;
  console.log(thing.count);
}

let counter = { count: 0 };

increment(counter);
console.log(counter);