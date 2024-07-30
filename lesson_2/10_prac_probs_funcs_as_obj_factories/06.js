// Finally, let's update our getDescription function to reflect the visited data. Assuming that canada.visited is false, your code should look like this:

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    
    getDescription() {
      if (!this.visited) {
        return this.name + ' is located in ' + this.continent + ". I haven't visited " + this.continent + '.';
      }
      return this.name + ' is located in ' + this.continent + '. I have visited ' + this.continent + '.';
    },

    visitCountry() {
      this.visited = true;
    },
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

// console.log(chile.getDescription());
// console.log(canada.getDescription());
// console.log(southAfrica.getDescription());

console.log(canada.getDescription());
canada.visitCountry();
console.log(canada.getDescription());


// canada.getDescription(); // "Canada is located in North America. I haven't visited Canada."
// canada.getDescription(); // "Canada is located in North America. I have visited Canada."


/*
LS SOLUTION - Line 52

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    visitCountry() {
      this.visited = true;
    },
    getDescription() {
      return this.name + ' is located in ' + this.continent + '. I ' +
      (this.visited ? 'have' : "haven't") +
      ' visited ' + this.name + '.';
    },
  };
}

*/