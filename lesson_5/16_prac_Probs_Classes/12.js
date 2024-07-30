class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    return `Hello, I'm ${this.name}. It's very nice to meet you.`;
  }
}

class Shouter extends Person {
  // constructor(name) {
  //   super(name);
  // }

  greeting() {
    return super.greeting().toUpperCase();
  }
}

let person = new Person('Jane');
let shouter = new Shouter('Bob');

console.log(person.greeting());
console.log(shouter.greeting());