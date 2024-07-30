// instantiating an object and assigning properties
let me = {
  firstName: 'AJ',
  lastName: 'Clarke',
};

// instantiating an empty object and adding properties later with 'dot' notation
// let me = {};
// me.firstName = 'AJ';
// me.lastName = 'Clarke';

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

fullName(me);     // AJ Clarke

let friend = {
  firstName: 'John',
  lastName: 'Smith',
}

fullName(friend); // John Smith

let mom = {
  firstName: 'Mom',
  lastName: 'Clarke',
}

let pops = {
  firstName: 'Pops',
  lastName: 'Simms',
}

fullName(mom);    // Mom Clarke
fullName(pops);   // Pops Simms

// creating an array to track names/people
let people = [];

// add all at once
// people.push(me, friend, mom, pops);
// console.log(people);

// add one at a time
people.push(me);
people.push(friend);
people.push(mom);
people.push(pops);

function rollCall(peopleList) {
  peopleList.forEach(fullName);
}

rollCall(people);

let people = {
  collection: [me, friend, mom, pops],
  
  rollCall: function (peopleList) {
    peopleList.forEach(fullName);
  }
};