// Consider the code below:

let chile = {
  name: 'The Republic of Chile',
  continent: 'South America',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};

let canada = {
  name: 'Canada',
  continent: 'North America',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};

let southAfrica = {
  name: 'The Republic of South Africa',
  continent: 'Africa',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};

// Think about what is necessary and unnecessary in this code. Where is there duplication?
/*

Each object would be required to have their own `name` and `continent` properties. These values need to be dynamic for each object being created.

The `getDescription` method (function) is duplicated within each object and having this automatically generated for each object would save time when creating new objects.

This could be achieved using a factory function.

*/