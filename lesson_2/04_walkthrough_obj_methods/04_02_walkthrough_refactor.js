// instantiating an object and assigning properties
let me = {
  firstName: 'AJ',
  lastName: 'Clarke',
};

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

let friend = {
  firstName: 'John',
  lastName: 'Smith',
}

let mom = {
  firstName: 'Mom',
  lastName: 'Clarke',
}

let pops = {
  firstName: 'Pops',
  lastName: 'Simms',
}

let people = {
  // collection: [me, friend, mom, pops],
  collection: [],
  uniqPersonId: 0,
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName + ' : ID = ' + person.id);
  },

  // rollCall: function() {
  //   people.collection.forEach(people.fullName);
  // }, 
  
  // refactor above `rollCall` to below
  rollCall: function() {
    this.collection.forEach(people.fullName);
  },

  getIndex: function(person) {
    let index = -1;
    for (let idx = 0; idx < this.collection.length; idx++) {
      if (this.collection[idx].firstName === person.firstName &&
        this.collection[idx].lastName === person.lastName) {
          index = idx;
          break;
          }
    }
  
    return index;
  },
  // LS `getIndex` function implementation //
  // getIndex: function(person) {
  //   let index = -1;
  //   this.collection.forEach(function(comparator, i) {
  //     if (comparator.firstName === person.firstName &&
  //         comparator.lastName === person.lastName) {
  //       index = i;
  //     }
  //   });
  
  //   return index;
  // },
  
  add: function(newPerson) {
    if (this.isInvalidPerson(newPerson)) return;

    newPerson.id = this.uniqPersonId;
    this.collection.push(newPerson);
    this.uniqPersonId += 1;
  },

  remove: function(person) {
    if (this.isInvalidPerson(person)) return;
    
    let index = this.getIndex(person);
    if (index !== -1) {
      this.collection.splice(index, 1);
    }
  },
  
  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },
  
  get: function(person) {
    if (this.isInvalidPerson(person)) return;
    
    return this.collection[this.getIndex(person)]
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) return;

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection([existingPersonId]) = person;
    }
  }
};

// non explicit intent way to add additional persons into the `people` collection
// people.collection.push(newPerson);
// Instead we should explicitly add an `add` method within the `people` object

people.add(me)
people.add(friend)
people.add(mom)
people.add(pops)

people.rollCall();

console.log(people.getIndex(friend));
people.remove(friend);
console.log(people.getIndex(friend));

people.rollCall();