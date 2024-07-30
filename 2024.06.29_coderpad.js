// Specifically, function prototypes are usually provided by JavaScript as the object referenced by the object prototype of the function 

// // This object prototype ultimately chains to Function.prototype, which has some useful methods such as apply, call, and bind, which we'll discuss in the Core curriculum.

// function func() {

// }

// // func.prototype;

// // console.log(Object.getPrototypeOf(func) === Function.prototype);

// // console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object)));

// // constructor function -> .prototype (function prototype)

// // instance of the constructor function (object) -> .__proto__ (object prototype)

// // `[[Prototype]]` _> __proto__

// function Animal() {

// }

// function Cat() {
  
// }

// // Cat.__proto__ = Animal;

// Object.setPrototypeOf(Cat, Animal);
// Cat.prototype.constructor = Cat;

// Animal.prototype.hi = function() {
//   console.log('hello');
// }

// let kitten = new Cat();

// kitten.hi();

// console.log(Animal.__proto__ === Function.prototype);

// console.log(Cat.__proto__);

// Object.setPrototypeOf(qux, bar);

// let foo = {
//   a: 1,
//   b: 2,
// };



// let bar = Object.create(foo);
// let baz = Object.create(bar);

// bar.hi = function() {
//   console.log('hello');
// }

// bar.a;                // 1
// baz.a;                // 1
// baz.c;                // undefined

// bar.hi();
// baz.hi();


// function myFunc() {
// }



// let bar = new myFunc();
// let baz = new myFunc();



// myFunc.prototype.hi = function() {
//   console.log('hello');
// }

// bar.hi();
// baz.hi();

// console.log(myFunc.prototype);



// FUNCTION ... -> .prototype 

// function Dog -> .prototype (function prototype)

// let rex -> rex.__proto__, Object.getPrototypeOf(rex) (object prototype)

// function NewConst() {
//   // if (!this.__proto__.hi) this.__proto__.hi = function() {
//   //   console.log('hello');
//   // }

//   this.__proto__.hi = function() {
//     console.log('hello');
//   }
// }

// let obj = new NewConst;
// let obj2 = new NewConst;

// console.log(NewConst.prototype);
// console.log(NewConst.prototype.__proto__ === Object.prototype)
// console.log(NewConst.__proto__ === Function.prototype)
// console.log(obj.__proto__ === NewConst.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)
// console.log(Object.__proto__);


// 1
// 2
// 3
// 4 .method() -> 4.__proto__.__proto__


// let prot = {};
// let foo = Object.create(prot)
// console.log(Object.getPrototypeOf(foo) === prot)
// console.log(prot.isPrototypeOf(foo))

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// Object.getPrototypeOf(qux) === baz; // true
// Object.getPrototypeOf(baz) === bar; // true
// Object.getPrototypeOf(bar) === foo; // true

// foo.isPrototypeOf(qux)

// let foo = {
//   a: 1,
//   b: 2,
// }

// let bar = Object.create(foo);
// let baz = Object.create(bar);

// console.log(bar.a);
// console.log(baz.a);
// console.log(bar.c);

// let foo = {
//   hello() {
//     return 'hello ' + this.name;
//   },
// };

// let bar = Object.create(foo);
// bar.name = 'world'
// console.log(bar.hello())


// let dog = {
//   say() {
//     console.log(this.name + ' says Woof!');
//   },

//   run() {
//     console.log(this.name + ' runs away');
//   },
// };

// let fido = Object.create(dog);
// fido.name = 'Fido';
// fido.say();
// fido.run();

// let spot = Object.create(dog);
// spot.name = 'Spot';
// spot.say();
// spot.run();

// console.log(Object.getPrototypeOf(fido) === dog);
// console.log(dog.isPrototypeOf(fido));

// let dog = {
//   say() {
//     console.log(this.name + ' says Woof!');
//   },
// };

// let fido = Object.create(dog);
// fido.name = 'Fido';
// fido.say = function() {
//   console.log(this.name + ' says WOOOOOF!');
// }

// fido.say();
// let spot = Object.create(dog);
// spot.name = 'Spot';
// spot.say();

// console.log(dog.hasOwnProperty('say'))
// console.log(Object.getOwnPropertyNames(fido))

// let foo = {
//   a: 1,
// };

// let bar = Object.create(foo);
// bar.a = 1;
// bar.b = 2;
// bar.hasOwnProperty('a');
// console.log(Object.getOwnPropertyNames(bar));

// delete bar.a;
// console.log(Object.getOwnPropertyNames(bar));

// console.log(bar.hasOwnProperty('c'));

// let boo = {}
// boo.myProp = 1;

// let far = Object.create(boo);
// // lots of code
// far.myProp;

// console.log(Object.getOwnPropertyNames(far));
// console.log(far.hasOwnProperty('myProp'));


// function shallowCopy(object) {
//   let returnObj = Object.create(Object.getPrototypeOf(object));

//   Object.getOwnPropertyNames(object).reduce((_, value) => {
//     returnObj[value] = object[value];
//   }, null);

//   return returnObj;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false
// console.log(baz.hasOwnProperty('c'));  // true


// function extend(destination, ...sourceObjects) {
//   sourceObjects.forEach(sourceObj => {
//     Object.getOwnPropertyNames(sourceObj).reduce((_, value) => {
//       destination[value] = sourceObj[value];
//     }, null);
//   });

//   return destination;
// }

// let foo = {
//   a: 0,
//   b: {
//     x: 1,
//     y: 2,
//   },
// };

// let joe = {
//   name: 'Joe',
// };

// let funcs = {
//   sayHello() {
//     console.log('Hello, ' + this.name);
//   },

//   sayGoodbye() {
//     console.log('Goodbye, ' + this.name);
//   },
// };

// let object = extend({}, foo, joe, funcs);

// console.log(object.b.x) // => 1
// object.sayHello();      // => Hello, Joe


// let Dog = function() {};

// Dog.prototype.say = function() {
//   console.log(this.name + ' says Woof!');
// }

// Dog.prototype.run = function() {
//   console.log(this.name + ' runs awy.');
// }

// let fido = new Dog();
// fido.name = 'Fido';
// fido.say();
// fido.run();
// let spot = new Dog();
// spot.name = 'Spot';
// spot.say();
// spot.run();


/*

It's worth noting that functions and classes are also objects. That means they have object prototypes. An object prototype for a function or class is not the same thing as the function prototype. Specifically, Dog() function prototypes (Dog.prototype) are usually provided by JavaScript as the object referenced by the object prototype of the function. This object prototype ultimately chains to Function.prototype, which has some useful methods such as apply, call, and bind, which we'll discuss in the Core curriculum.

Function.prototype
*/

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayName = function() {
//     console.log(this.name)
//   };

//   return this;
// }

// console.log(Object.getPrototypeOf(Person) === Function.prototype)
// console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype)
// console.log(Person.__proto__ === Function.prototype)
// console.log(Person.__proto__ === Person.prototype)

// let personObj = new Person('AJ', 42)
// console.log(Object.getPrototypeOf(personObj))
// person.sayName();
// Person.prototype.stateAge = function() {
//   console.log(this.age);
// }

// person.stateAge();
// console.log(Person.prototype);

// console.log(person.__proto__ === Person.prototype);
// console.log(person.__proto__.__proto__ === Person.prototype.__proto__);
// console.log(Person.prototype.__proto__ === Object.prototype);

// let obj = new Object();

// console.log(obj.__proto__ === Object.prototype);

// function Kid(school, hobbies) {
//   this.school = school;
//   this.hobbies = hobbies;
// }

// let child = new Kid('Aberdeen Elementary', ['build sandcastles']);


// Object.setPrototypeOf(Kid.prototype, Person.prototype); // equiv to Kid.prototype.__proto__ = Person.prototype
// console.log(Kid.__proto__ === Function.prototype)
// console.log(Kid.prototype.__proto__.__proto__.constructor.__proto__ === Function.prototype)

// Kid.prototype.stateHobbies = function() {
//   this.hobbies.forEach(hobby => {
//     console.log(`I like to ${hobby}`);
//   })
// }

// child.age = 5;
// child.stateAge();
// child.stateHobbies();

/*
- Prototype objects
    - The term prototype is used to refer two distinct, but still related concepts.
        - The object prototype.
            - The object prototype is the object that is referenced by objects created by a constructor function. By default, the constructor function sets the object prototype for the objects it creates, to the constructor’s prototype object.
        - The function prototype (also called the constructor’s prototype object).
            - This is the object used by the constructor function as the object prototype. Each object that the constructor creates, inherits from the function prototype. The function prototype is stored within the constructor’s `prototype` property. This property is only used when a function is called as a constructor through the use of the `new` keyword.
*/

/*

function Person() {
  // .prototype => references { [[Prototype]]: Object.prototype }
}

let test = new Person()

console.log(Object.prototype.constructor.__proto__ === Function.prototype)

console.log(Person.__proto__ === Function.prototype)

*/

// class Truck {
//   #truckCount = 0;
//   constructor(year, model) {
//     this.year = year;
//     this.model = model;
//     this.#truckCount += 1;
//   }

//   get truckCount() {
//     return this.#truckCount;
//   }
// }

// let truck = new Truck();
// console.log(truck.truckCount);
// Truck.prototype.model = '';
// Truck.prototype.year = 0;
// console.log(Object.getOwnPropertyNames(Truck.prototype));

// function Truck() {}
// Truck.prototype.year = 2024;
// Truck.prototype.model = 'Dodge Ram';



// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   meow() {
//     console.log('le meow');
//   }
//   whoAmI() {
//     console.log(`My name is ${this.name}. I am a ${this.color} cat.`)
//   }
// }

// console.log(Object.getOwnPropertyNames(Cat.prototype));

// let cat = new Cat();
// console.log("is cat's prototype is Cat.prototype? " + (Object.getPrototypeOf(cat) === Cat.prototype));

// let myProto = {
//   meow() {
//     console.log('Mzeow!');
//   }
// };

// cat.meow()
// console.log("setting `cat` prototype to `myProto`")
// Object.setPrototypeOf(cat, myProto)

// cat.meow()

// console.log("is cat's prototype is still Cat.prototype? " + (Object.getPrototypeOf(cat) === Cat.prototype));
// console.log("is cat's prototype is now myProto? " + (Object.getPrototypeOf(cat) === myProto));

// console.log(Cat.prototype);

// class Mammal {
//   constructor() {
//     this.a = "I'm a mammal!";
//   }
  
//   foo() { console.log("Mammal.foo"); }
// }

// class Whale extends Mammal {
//   foo() { console.log("Whale.foo"); }
// }

// class Beluga extends Whale {}

// let beluga = new Beluga();

// beluga.foo();
// console.log(beluga.a);
// beluga.bar();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating.`);
//   }
// }

// class Mammal extends Animal {
//   constructor(name, hasFur) {
//     super(name);
//     this.hasFur = hasFur;
//   }

//   sleep() {
//     console.log(`${this.name} is sleeping.`);
//   }
// }

// class Dog extends Mammal {
//   constructor(name, hasFur, breed) {
//     super(name, hasFur);
//     this.breed = breed;
//   }

//   bark() {
//     console.log(`${this.name} the ${this.breed} is barking.`);
//   }
// }

// let myDog = new Dog('Rex', true, 'German Shepherd');
// myDog.eat();
// myDog.sleep();
// myDog.bark();

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function() {
//   console.log(`${this.name} is eating.`);
// }

// function Mammal(name, hasFur) {
//   Animal.call(this, name)
//   this.hasFur = hasFur;
// }

// // console.log(Object.getPrototypeOf(Mammal.prototype));
// Object.setPrototypeOf(Mammal.prototype, Animal.prototype);
// // Mammal.prototype = Object.create(Animal.prototype);
// // Mammal.prototype.constructor = Mammal;
// // console.log(Object.getPrototypeOf(Mammal.prototype));
// // Mammal.prototype = Object.create()

// let myMammal = new Mammal('Flipper', false)
// console.log(myMammal instanceof Mammal)
// console.log(myMammal instanceof Animal)

// Mammal.prototype.sleep = function() {
//   console.log(`${this.name} is sleeping.`);
// }

// function Dog(name, hasFur, breed) {
//   Mammal.call(this, name, hasFur)
//   this.breed = breed;
// }

// Object.setPrototypeOf(Dog.prototype, Mammal.prototype);

// Dog.prototype.bark = function() {
//   console.log(`${this.name} the ${this.breed} is barking.`)
// }

// let myDog = new Dog('Rex', true, 'German Shepherd');

// console.log(myDog instanceof Dog)
// console.log(myDog instanceof Mammal)
// console.log(myDog instanceof Animal)

// console.log(myDog)
// myDog.eat();
// myDog.sleep();
// myDog.bark();

// console.log(Dog.prototype.constructor)
// console.log(Mammal.prototype.constructor)
// console.log(Animal.prototype.constructor)

