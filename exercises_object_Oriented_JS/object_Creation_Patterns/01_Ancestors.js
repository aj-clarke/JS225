
let foo = { name: 'foo' };

let bar = Object.create(foo);
bar.name = 'bar';

let baz = Object.create(bar);
baz.name = 'baz';

let qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  let returnArr = [];
  let nextObj = Object.getPrototypeOf(this);
  let breakOut = true;

  do {
    if (nextObj.name === undefined) {
      returnArr.push('Object.prototype');
      breakOut = false;
      break;
    }
    
    returnArr.push(nextObj.name);
    nextObj = Object.getPrototypeOf(nextObj);
  } while (breakOut);

  return returnArr;
}
console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']


/* LS SOLUTION AND NOTES

Object.prototype.ancestors = function ancestors() {
  const ancestor = Object.getPrototypeOf(this);

  if (ancestor.hasOwnProperty('name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};
Discussion
The problem lends itself well to a recursive solution. The resulting array is incrementally built by recursively calling on the Object.prototype.ancestors method. The base case is when ancestor does not have a name property anymore since it means that ancestor is in Object.prototype already. When this is the case, there are no more prototype objects to add. The key for this solution is recognizing that the value of this is the calling object and that we have to add the ancestors method on Object.prototype so that all objects have access to it.

Be mindful when adding methods to built-in Objects (e.g, String.prototype, Object.prototype. It may lead to confusing code and can have unintended consequences.

*/