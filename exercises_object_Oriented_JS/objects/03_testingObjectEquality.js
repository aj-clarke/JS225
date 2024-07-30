/*
In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates as true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

*/


function objectsEqual(obj1, obj2) {

  // let obj1Entries = Object.entries(obj1)
  // let obj2Entries = Object.entries(obj2)
  // if (obj1Entries.length !== obj2Entries.length) return false

  if (!Object.getOwnPropertyNames(obj1).every(key => Object.getOwnPropertyNames(obj2).includes(key))) return false;

  for (let key in obj1) {
    if (obj2[key] !== obj1[key]) return false
  }

  return true
}

/* BETTER SOLUTION ABOVE!!
function objectsEqual(obj1, obj2) {
  obj1Entries = sortObjects(Object.entries(obj1));
  obj2Entries = sortObjects(Object.entries(obj2));

  return obj1Entries.every((obj1Subarr, subarrIdx) => {
    return obj1Subarr.every((_, subarrEleIdx) => {
      let obj1Value;
      let obj2Value;
      if (obj1Entries[subarrIdx]) {
        obj1Value = obj1Entries[subarrIdx][subarrEleIdx];
      }

      if (obj2Entries[subarrIdx]) {
        obj2Value = obj2Entries[subarrIdx][subarrEleIdx];
      }

      return obj1Value === obj2Value;
    });
  });
}

function sortObjects(obj) {
  return obj.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  })
}
*/


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false