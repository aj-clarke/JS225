function subtract(a, b) {
  return a - b;
}

function makeSub() {
  return function(subFrom) {
    return subtract(subFrom, 5)
  }
  // implement this function using partial function application
}

const sub5 = makeSub();

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15