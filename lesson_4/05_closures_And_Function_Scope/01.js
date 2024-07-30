function makeMultipleLister(number) {
  return function () {
    let start = number;
    while (start < 100) {
      console.log(start);
      start += number;
    }
  };
}

let lister = makeMultipleLister(13);
lister();


/* LS SOLUTION

function makeMultipleLister(number) {
  return function () {
    for (let i = number; i < 100; i += number) {
      console.log(i);
    }
  };
}

*/