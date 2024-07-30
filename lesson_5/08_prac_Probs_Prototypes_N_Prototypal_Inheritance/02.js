// function shallowCopy(object) {
//   let toCopy = Object.getOwnPropertyNames(object);
//   let returnObject = toCopy.reduce((obj, value) => {
//     obj[value] = object[value];
//     return obj;
//   }, {});

//   Object.setPrototypeOf(returnObject, object);

//   return returnObject;
// }

function shallowCopy(object) {
  let returnObj = Object.create(Object.getPrototypeOf(object));

  Object.getOwnPropertyNames(object).reduce((_, value) => {
    returnObj[value] = object[value];
  }, null);

  return returnObj;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};


let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
console.log(baz.hasOwnProperty('c'));  // true

/* LS SOLUTION

function shallowCopy(object) {
  let copy = Object.create(Object.getPrototypeOf(object));

  Object.getOwnPropertyNames(object).forEach(function(prop) {
    copy[prop] = object[prop];
  });

  return copy;
}

*/