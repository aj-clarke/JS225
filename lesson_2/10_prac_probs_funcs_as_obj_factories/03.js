// We've decided that we want to track which countries we've visited, and which we haven't. Alter the factory function so that the object it returns includes a property visited with a value of false.

let makeCountry = function(name, continent) {

  return {
    name,
    continent,
    visited: false,

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