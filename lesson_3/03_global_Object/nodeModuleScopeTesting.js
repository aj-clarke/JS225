// replicating a Node environment

var foo = 'foo';  // declared with `var` - added to the module scope

bar = 'bar';      // no keyword declaration - added to the global scope

let qux = 'qux';  // declared with `let` - added to the module scope

// validating above

console.log(global.foo);  // undefined
console.log(global.bar);  // 'bar'
console.log(global.qux);  // undefined
console.log(foo);         // 'foo'
console.log(qux);         // 'qux'

// none of the above are properties of `this` 

console.log(this.foo);    // undefined
console.log(this.bar);    // undefined
console.log(this.qux);    // undefined
console.log(this);        // {}
