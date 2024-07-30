/* The code below is expected to output the following when run:

> const helloVictor = createGreeter('Victor');
> helloVictor.greet('morning');
= Good Morning Victor
*/

function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

// const helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');

/*
However, it instead results in an error. What is the problem with the code? Why isn't it producing the expected results?

ANSWER:
On line 18, we are attempting to output the value referenced by `morning`; however, we are missing the `this` keyword in various locations within the `greet` method which would allow us to use the `helloVictor` objects context to resolve each variables value. The code should be altered to the following:

LS ANSWER:
The problem is that it didn't use the `this` keyword to access the properties of the object returned by the createGreeter function.

*/

function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

const helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
helloVictor.name = 'Tommy';
helloVictor.greet('morning');

/*

Further Exploration
An alternative solution to this exercise is the following code:

Copy Code
// rest of code omitted for brevity

      switch (timeOfDay) {
        case 'morning':
          msg += this.morning + ' ' + name;
          break;
        case 'afternoon':
          msg += this.afternoon + ' ' + name;
          break;
        case 'evening':
          msg += this.evening + ' ' + name;
          break;
      }

// rest of code omitted for brevity
Why does it work? What concept does this demonstrate?

ANSWER:
Whenever we create a function or a method, we create a closure. The `createGreeter` function has `name` parameter that has `Victor` passed in. `name` was not defined within the function; therefore, the `name` variable and its value become a part of the closure.
When we later reference `name` (without `this`) we reference the original value from the `createGreeter` function that `name` was initialized.
If the `helloVictor` object has its `name` property changed. We would output the new name when using `this.name`, but without `this`, `Victor` would be output.
*/