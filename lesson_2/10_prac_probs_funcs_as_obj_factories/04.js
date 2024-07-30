// The situation in 03.js seems a bit problematic, though. Suppose we want to add a country that we've already visited. Alter the factory function to use an optional visited parameter with a default value of false.

let makeCountry = function(name, continent, visited) {
  if (visited === undefined) visited = false;

  return {
    name,
    continent,
    visited,

    getDescription() {
      return this.name + ' is located in ' + this.continent + '.';
    },
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription());
console.log(canada.getDescription());
console.log(southAfrica.getDescription());


// NOTE: I originally went with a default parameter approach `visited = false` instead of the `if statement`. Keep in mind that this functionality does not work prior to ES6. Below was my original implmentation.

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    
    getDescription() {
      return this.name + ' is located in ' + this.continent + '.';
    },
  };
}