let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(number) {
    return number % 2 === 0;
  }
}

let checkEven = makeCheckEven();

console.log(numbers.filter(checkEven)); // [2, 4]