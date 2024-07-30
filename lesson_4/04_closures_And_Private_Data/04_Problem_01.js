/*
Create a makeCounterLogger function that takes a number as an argument and returns a function. When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:
*/

function makeCounterLogger(startNum) {
  
  function countUp(num) {
    return num += 1;
  }

  function countDown(num) {
    return num -= 1;
  }
  return function countToNumber(endNum) {
    let number = startNum;
    console.log(number);
    
    while (number !== endNum) {
      if (number < endNum) number = countUp(number);
      else number = countDown(number);
      console.log(number);
      
      if (number === endNum) break;
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2


/* LS SOLUTION
function makeCounterLogger(start) {
  return function(finish) {
    if (start > finish) {
      for (let i = start; i >= finish; i -= 1) {
        console.log(i);
      }
    } else {
      for (let i = start; i <= finish; i += 1) {
        console.log(i);
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2

*/