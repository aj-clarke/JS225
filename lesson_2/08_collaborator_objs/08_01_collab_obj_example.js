let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // not implemented
  },
};

let dog = {
  name: 'Maxi',

  makeNoise() {
    console.log('Bark! Bark!');
  },

  eat() {
    // not implemented
  },
}

let pete = {
  name: 'Pete',
  pets: [],

  printName() {
    console.log(`My name is ${this.name}`);
    console.log(`My dogs name is ${this.pets[this.pets.indexOf(dog)].name}`);
    console.log(`My cats name is ${this.pets[this.pets.indexOf(cat)].name}`);
  },
};

pete.printName();

// pete.pets[dog].makeNoise();
// pete.pets[cat].makeNoise();

let petesCat = pete.pets[pete.pets.indexOf(dog)];
let petesDog = pete.pets[pete.pets.indexOf(cat)];
petesDog.makeNoise();
petesCat.makeNoise();