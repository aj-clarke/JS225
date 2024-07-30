function makeListTransformer(func) {
  // ... implement this function
  return function(collection) {
    return collection.map(func);
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]
console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]