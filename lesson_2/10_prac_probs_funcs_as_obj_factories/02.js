let makeCountry = function(name, continent) {

  return {
    name,
    continent,

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

// Given our observations about the code in problem 01.js, implement a factory function for our country objects following the above `console.log` code.