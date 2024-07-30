let greeter = {
  morning: function() {
    console.log('Good Morning!');
  },
};

function evening() {
  console.log('Good Evening!');
}

// Method invocation
greeter.morning();  // greeter is receiver/calling obj; morning() is a method

// Function invocation
evening();          // no explicit receiver, evening() is a function


// -----------------------------------------------------------------------------

// NOTE: One function obj can use BOTH invocations: demonstrated below

// -----------------------------------------------------------------------------

// Using the initialized `greeter` object from line 1
// let greeter = {
//   morning: function () {
//     console.log('Good morning!');
//   },
// };

// Method invocation: executing a method
greeter.morning();  //  => Good morning!

// Create a var which points at the greeter.morning method
let myGreeter = greeter.morning;

// Function invocation: executing the `myGreeter` function
myGreeter();