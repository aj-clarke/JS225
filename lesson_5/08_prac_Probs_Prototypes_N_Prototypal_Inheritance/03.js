function extend(destination, ...sourceObjects) {
  sourceObjects.forEach(sourceObj => {
    Object.getOwnPropertyNames(sourceObj).reduce((_, value) => {
      destination[value] = sourceObj[value];
    }, null);
  });

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe',
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodbye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x) // => 1
object.sayHello();      // => Hello, Joe