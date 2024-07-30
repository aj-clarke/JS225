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

// function Smartphone(brand, model, releaseYear) {
//   this.brand = brand;
//   this.model = model;
//   this.releaseYear = releaseYear;
// }

// Smartphone.prototype.checkBatteryLevel = function() {
//   console.log(`The ${this.brand} ${this.model} battery is at 75%.`);
// }

// Smartphone.prototype.displayInfo = function() {
//   console.log(`This is a ${this.brand} ${this.model} released in ${this.releaseYear}.`)
// }

// let iphone12 = new Smartphone('Apple', 'iPhone 12', 2020);
// let samsung = new Smartphone('Samsung', 'Galaxy S21', 2021);

// iphone12.checkBatteryLevel();
// samsung.checkBatteryLevel();
// iphone12.displayInfo();
// samsung.displayInfo();

// function Vehicle(type) {
//   this.type = type;
// }

// Vehicle.prototype.accelerate = function() {
//   console.log(`The ${this.type} is accelerating.`);
// }

// Vehicle.prototype.decelerate = function() {
//   console.log(`The ${this.type} is slowing down.`);
// }

// function Car() {
//   Vehicle.call(this, 'car');
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;
// // console.log(Car.prototype.constructor)

// Car.prototype.honk = function() {
//   console.log(`The car honks. Beep Beep!`)
// }

// let car = new Car();
// // car.decelerate();
// // car.honk();
// // car.accelerate();


// function Boat() {
//   Vehicle.call(this, 'boat');
// }

// Boat.prototype = Object.create(Vehicle.prototype);
// Boat.prototype.constructor = Boat;
// // console.log(Boat.prototype.constructor)

// Boat.prototype.dropAnchor = function() {
//   console.log(`The boat is dropping anchor!`)
// }

// let boat = new Boat();
// // boat.dropAnchor();
// // boat.accelerate();
// // boat.decelerate();


// function Plane() {
//   Vehicle.call(this, 'plane');
// }

// Plane.prototype = Object.create(Vehicle.prototype);
// Plane.prototype.constructor = Plane;

// Plane.prototype.takeOff = function() {
//   console.log('The plane is taking off!');
// }

// Plane.prototype.land = function() {
//   console.log('The plane is coming in for a landing!');
// }


// let plane = new Plane();
// plane.accelerate();
// plane.takeOff();
// plane.land();
// plane.decelerate();

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.bark = function() {
//   console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
// }

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark();

// console.log(maxi.hasOwnProperty('bark'))
// console.log(dexter.hasOwnProperty('bark'))
// console.log(biggie.hasOwnProperty('bark'))

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// let AREA = function() {
//   return (.5 * (2 * 3.14159 * radius) * radius);
// }

// function Circle(radius) {
//   this.radius = radius;
//   // this.area = function() {
//   //   return (.5 * (2 * 3.14159 * this.radius) * this.radius);
//   // }
// }

// Circle.prototype.area = function() {
//   return (.5 * (2 * 3.14159 * this.radius) * this.radius);
// }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2));
// console.log(b.area().toFixed(2));

// function Ninja() {
//   this.swung = true;
// }
// let ninja;

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword());

// let ninja;

// function Ninja() {
//   this.swung = true;
//   // .prototype: {}
// }

// ninja = new Ninja();
// console.log(ninja.__proto__ === Ninja.prototype)
// console.log(Ninja.prototype)
// // Ninja.prototype.swingSword = function() {
// //   return this.swing;
// // }

// // console.log(ninja.__proto__)

// Ninja.prototype = {
//   swingSword() {
//     return this.swung;
//   },
// };

// console.log(ninja.__proto__ === Ninja.prototype)
// console.log(Ninja.prototype)

// // console.log(ninja.swingSword());

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this
// }
// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// console.log(ninjaA.swing().swung);
// console.log(ninjaB.swing().swung);

// let ninjaA = (function() {
//   function Ninja() {};
//   return new Ninja();
// })();

// let ninjaB = Object.create(ninjaA.constructor.prototype);

// console.log(ninjaB.constructor === ninjaA.constructor)

// let shape = {
//   getType() {
//     return this.type;
//   },
// };

// function Triangle(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// }
// Triangle.prototype = Object.create(shape);
// Triangle.prototype.constructor = Triangle;
// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// }

// let t = new Triangle(3, 4, 5);
// console.log(t.constructor);           // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));  // true
// console.log(t.getPerimeter());        // 12
// console.log(t.getType());             // 'triangle'

// console.log("Hello".constructor.name)
// console.log([1, 2, 3].constructor.name)
// console.log({ name: 'Srdjan' }.constructor.name)

// function User(first, last) {
//   // if (this === undefined) {  // better to use `instanceof` here
//   if (!(this instanceof User)) {
//     let returnObj = new User(first, last);
//     return returnObj;
//   } else {
//     this.first = first;
//     this.last = last;
//     this.name = this.first + ' ' + this.last;
//   }
// }

// // User.prototype.name = function() {
// //   return this.first + ' ' + this.last;
// // }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// // console.log('user 1 good')
// let user2 = User('John', 'Doe');
// // console.log('user 2 good')
// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// function createObject(obj) {
//   let returnObj = {};
//   Object.setPrototypeOf(returnObj, obj);

//   return returnObj;

//   // function createObject(obj) {
//   //   function F() {}
//   //   F.prototype = obj;
//   //   return new F();
//   // }
// }

// let foo = {
//   a: 1,
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));       // true

// // did this wrong, should have added method to Object.prototype
// let foo = {
//   a: 1,
// };

// foo.begetObject = function() {
//   let self = this;
//   let returnObj = {};
//   Object.setPrototypeOf(returnObj, self);

//   return returnObj;
// }

// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));


// function neww(constructor, args) {
//   let stagingObj = Object.create(constructor.prototype);
//   let constructedObj = constructor.apply(stagingObj, args);
//   console.log(constructedObj)
//   return typeof constructedObj === 'object' ? constructedObj : stagingObj;
// }

// // function neww(constructor, args) {
// //   let object = Object.create(constructor.prototype);
// //   let result = constructor.apply(object, args);

// //   return typeof result === 'object' ? result : object;
// // }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   return 'hello';
// }

// Person.prototype.greeting = function() {
//   console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };

// let john = neww(Person, ['John', 'Doe']);

// console.log(john)
// john.greeting();
// console.log(john.constructor);


// function Dog() {
  
// }

// Dog.species = 'Canis lupus';

// console.log(Dog.species);

// function Point(x = 0, y = 0) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.onXAxis = function() {
//   return this.y === 0;
// };

// Point.prototype.onYAxis = function() {
//   return this.x === 0;
// };

// Point.prototype.distanceToOrigin = function() {
//   return Math.sqrt((this.x * this.x) + (this.y * this.y));
// };

// let pointA = new Point(30, 40);

// let pointB = new Point(20);

// console.log(pointA instanceof Point);
// console.log(pointB instanceof Point);
// console.log(pointA.distanceToOrigin());
// console.log(pointB.onXAxis());


// function Pet(animal, name) {
//   this.animal = animal;
//   this.name = name;
// }

// Pet.prototype.aboutMe = function() {
//   console.log(`I am a ${this.animal}. My name is ${this.name}.`)
// }
// Pet.prototype.sleep = function () {
//   console.log('I am sleeping');
// }
// Pet.prototype.wake = function () {
//   console.log('I am awake');
// }

// let pudding = new Pet('Cat', 'Pudding');
// pudding.aboutMe();
// pudding.sleep();
// pudding.wake();

// let neptune = new Pet('Cat', 'Neptune');
// neptune.aboutMe();
// neptune.sleep();
// neptune.wake();

// function newPerson(name) {
//   return Object.defineProperties({ name: name }, {
//     log: {
//       value: function() {
//         console.log(this.name);
//       },
//       writeable: false,
//     },
//   });
// }

// let me = newPerson('Shane Riley');
// me.log();     // Shane Riley
// me.log = function() { console.log('Amanda Rose'); };
// me.log();     // Shane Riley


// class Cat {
//   static genericCatGreeting() {
//     console.log("Hello! I'm a cat!");
//   }
//   constructor(name = 'Kitty') {
//     this.name = name;
//   };

//   greet() {
//     console.log(`Hello, I'm a cat! My name is ${this.name}!`);
//   }

//   rename(newName) {
//     this.name = newName;
//   }
// }

// let kitty = new Cat();
// let sophie = new Cat('Sophie');
// kitty.greet();
// kitty.rename('Alice');
// kitty.greet();
// Cat.genericCatGreeting();


// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getWidth() {
//     return this.width;
//   }
//   getLength() {
//     return this.length;
//   }
//   getArea() {
//     return this.width * this.length;
//   }
// }

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//     this.side = side;
//   }
// }

// let rect = new Rectangle(4, 5);
// // console.log(rect.getWidth()); // 4
// // console.log(rect.getLength()); // 5
// // console.log(rect.getArea()); // 20

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`);


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meoww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);

// console.log(fakeCat instanceof Cat);  // logs true
// console.log(fakeCat.name);            // logs undefined
// console.log(fakeCat.speaks());        // logs undefined says meoww.


// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} and has ${this.color} fur.`
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white')

// console.log(pudding.info());
// console.log(butterscotch.info());

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog', status);
//     this.master = master;
//   }
//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, 'cat', status);
//   }
//   introduce() {
//     return super.introduce.call(this) + ' Meow meow!';
//     OR return `${super.introduce()} Meow meow!`;
//   }
// }

// let cat = new Cat('Pepe', 2, 'happy');
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");

// let dog = new Dog('Thor', 2, 'excited', 'AJ');
// console.log(dog.introduce());
// console.log(dog.greetMaster());

// class Vehicle {
//   constructor(make, model, wheels) {
//     this.make = make;
//     this.model = model;
//     this.wheels = wheels
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }

//   getWheels() {
//     return this.wheels;
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model) {
//     super(make, model, 4);
//   }

//   // getWheels() {
//   //   return 4;
//   // }
  
//   // info() {
//   //   return `${this.make} ${this.model}`;
//   // }
// }

// class Motorcycle extends Vehicle {
//   constructor(make, model) {
//     super(make, model, 2);
//   }

//   // getWheels() {
//   //   return 2;
//   // }

//   // info() {
//   //   return `${this.make} ${this.model}`;
//   // }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model, 6);
//     this.payload = payload;
//   }

//   // getWheels() {
//   //   return 6;
//   // }

//   // info() {
//   //   return `${this.make} ${this.model}`
//   // }
// }

// let car = new Car('Honda', 'Civic');
// let motorcycle = new Motorcycle('Suzuki', 'Hayabusa');
// let truck = new Truck('Ford', 'F150', 2000);

// console.log(car.getWheels());
// console.log(motorcycle.getWheels());
// console.log(truck.getWheels());

// console.log(car.info());
// console.log(motorcycle.info());
// console.log(truck.info());

// console.log(car);
// console.log(motorcycle);
// console.log(truck);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greeting() {
//     return `Hello, I'm ${this.name}. It's very nice to meet you.`;
//   }
// }

// class Shouter extends Person {
//   // constructor(name) {
//   //   super(name);
//   // }

//   greeting() {
//     return super.greeting().toUpperCase();
//   }
// }

// let person = new Person('Jane');
// let shouter = new Shouter('Bob');

// console.log(person.greeting());
// console.log(shouter.greeting());

// class Pet {
//   constructor(type, name) {
//     this.type = type;
//     this.name = name;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }

//   addPet(pet) {
//     this.pets.push(pet);
//   }

//   numberOfPets() {
//     return this.pets.length;
//   }
// }

// class Shelter {
//   constructor() {
//     this.adoptions = {};
//   }

//   adopt(owner, pet) {
//     let personName = owner.name;
//     this.adoptions[personName] = this.adoptions[personName] || [];
//     this.adoptions[personName].push(pet);
//     owner.addPet(pet);
//   }

//   printAdoptions() {
//     for (let owner in this.adoptions) {
//       console.log(`${owner} has adopted the following pets:`);

//       for (let idx in this.adoptions[owner]) {
//         let pet = this.adoptions[owner][idx];
//         console.log(`a ${pet.type} named ${pet.name}`);
//       }

//       console.log(' ');
//     }
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);


// class Banner {
//   constructor(message) {
//     this.message = message;
//     this.numOfDashes = message.length;
//   }

//   displayBanner() {
//     console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
//   }

//   horizontalRule() {
//     return `+-${'-'.repeat(this.numOfDashes)}-+`
//  }

//   emptyLine() {
//     return `| ${' '.repeat(this.numOfDashes)} |`
//   }

//   messageLine() {
//     return `| ${this.message} |`
//   }
// }

// let banner1 = new Banner('To boldly go where no one has gone before.');
// banner1.displayBanner();

// let banner2 = new Banner('');
// banner2.displayBanner();

// let foo = { name: 'foo' }

// function getPrototype(obj) {
//   let returnObj = Object.getPrototypeOf(obj);
//   console.log(Object.getOwnPropertyNames(returnObj));
//   console.log(Object.getPrototypeOf(obj));
// }
// console.log(getPrototype(foo));

// function delegate(object, objMethod, arg) {
//   return object[objMethod](arg);
// }

// const foo = {
//   name: 'test',
//   bar(greeting) {
//     console.log(`${greeting} ${this.name}`);
//   },
// };

// const baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();  // logs 'hello test'

// foo.bar = () => { console.log('changed') };

// baz.qux();  // logs 'changed'



// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.fullName = function() {
//   return this.firstName + ' ' + this.lastName;
// };

// Person.prototype.communicate = function() {
//   console.log('Communicating')
// };

// Person.prototype.eat = function() {
//   console.log('Eating');
// };

// Person.prototype.sleep = function() {
//   console.log('Sleeping');
// };

// // class Person {
// //   constructor(firstName, lastName, age, gender) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //     this.gender = gender;
// //   }

// //   fullName() {
// //     return this.firstName + ' ' + this.lastName;
// //   }

// //   communicate() {
// //     console.log('Communicating')
// //   }

// //   eat() {
// //     console.log('Eating');
// //   }

// //   sleep() {
// //     console.log('Sleeping');
// //   }
// // }

// function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.constructor = Doctor;

// Doctor.prototype.diagnose = function() {
//   console.log('Diagnosing');
// };

// // class Doctor extends Person {
// //   constructor(firstName, lastName, age, gender, specialization) {
// //     super(firstName, lastName, age, gender);
// //     this.specialization = specialization;
// //   }

// //   diagnose() {
// //     console.log('Diagnosing');
// //   }
// // }

// function Professor(firstName, lastName, age, gender, subject) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
// }

// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.constructor = Professor;

// Professor.prototype.teach = function() {
//   console.log('Teaching');
// };
// // class Professor extends Person {
// //   constructor(firstName, lastName, age, gender, subject) {
// //     super(firstName, lastName, age, gender);
// //     this.subject = subject;
// //   }

// //   teach() {
// //     console.log('Teaching');
// //   }
// // }

// function Student(firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.study = function() {
//   console.log('Studying');
// };

// // class Student extends Person {
// //   constructor(firstName, lastName, age, gender, degree) {
// //     super(firstName, lastName, age, gender);
// //     this.degree = degree;
// //   }

// //   study() {
// //     console.log('Studying');
// //   }
// // }

// class GraduateStudent extends Student {
//   constructor(firstName, lastName, age, gender, graduateDegree) {
//     super(firstName, lastName, age, gender);
//     this.graduateDegree = graduateDegree;
//   }

//   research() {
//     console.log('Researching');
//   }
// }






// const person = new Person('Foo', 'Bar', 21, 'male');
// // console.log(person instanceof Person);       // logs true
// // console.log(person instanceof Doctor);       // logs false
// // console.log(person instanceof Professor);    // logs false
// // console.log(person instanceof Student);      // logs false
// // person.eat();                                // logs 'Eating'
// // person.communicate();                        // logs 'Communicating'
// // person.sleep();                              // logs 'Sleeping'
// // console.log(person.fullName());              // logs 'Foo Bar'

// const doctor = new Doctor('Bar', 'Qux', 21, 'female', 'Pediatrics');
// // console.log(doctor instanceof Person);       // logs true
// // console.log(doctor instanceof Doctor);       // logs true
// // console.log(doctor instanceof Professor);    // logs false
// // console.log(doctor instanceof Student);      // logs false
// // doctor.eat();                                // logs 'Eating'
// // doctor.communicate();                        // logs 'Communicating'
// // doctor.sleep();                              // logs 'Sleeping'
// // console.log(doctor.fullName());              // logs 'Bar Qux'
// // doctor.diagnose();                           // logs 'Diagnosing'

// const professor = new Professor('Bar', 'Foo', 48, 'female', 'Law');
// // console.log(professor instanceof Person);    // logs true
// // console.log(professor instanceof Professor); // logs true
// // console.log(professor instanceof Doctor);    // logs false
// // console.log(professor instanceof Student);   // logs false
// // professor.eat();                             // logs 'Eating'
// // professor.communicate();                     // logs 'Communicating'
// // professor.sleep();                           // logs 'Sleeping'
// // console.log(professor.fullName());           // logs 'Bar Foo'
// // professor.teach();                           // logs 'Teaching'

// const student = new Student('Bar', 'Baz', 19, 'male', 'BS Computer Science');
// console.log(student instanceof Person);    // logs true
// console.log(student instanceof Professor); // logs false
// console.log(student instanceof Doctor);    // logs false
// console.log(student instanceof Student);   // logs true
// student.eat();                             // logs 'Eating'
// student.communicate();                     // logs 'Communicating'
// student.sleep();                           // logs 'Sleeping'
// console.log(student.fullName());           // logs 'Bar Baz'
// student.study();                           // logs 'Studying'

// // const graduateStudent = new GraduateStudent('Qux', 'Bar', 21, 'non-binary', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // // logs true for next three statements
// // console.log(graduateStudent instanceof Person);          // logs true
// // console.log(graduateStudent instanceof Student);         // logs true
// // console.log(graduateStudent instanceof GraduateStudent); // logs true
// // console.log(graduateStudent instanceof Professor);       // logs false
// // console.log(graduateStudent instanceof Doctor);          // logs false
// // graduateStudent.eat();                       // logs 'Eating'
// // graduateStudent.communicate();               // logs 'Communicating'
// // graduateStudent.sleep();                     // logs 'Sleeping'
// // console.log(graduateStudent.fullName());     // logs 'Qux Bar'
// // graduateStudent.study();                     // logs 'Studying'
// // graduateStudent.research();                  // logs 'Researching'


function heroCreator(name, gender, ...superPowers) {
  return {
    name,
    gender,
    superPowers,

    heroInfo() {
      console.log(`My name is ${this.name}, and I have the following super powers:\n${this.superPowers.join('\n')}`)
    }
  };
}

let hulk = heroCreator('Hulk', 'male', 'Super Strength', 'Thunderclap', 'Regeneration');
console.log(hulk);
hulk.heroInfo();

let superman = heroCreator('Superman', 'male', 'Invulnerability', 'Flight', 'Heat Vision', 'Super Speed', 'and much more!!');
superman.heroInfo();



let computer = {
  name: 'The Hulk',
  operatingSystem: 'Windows 11',

  powerOn() {
    console.log(`${this.name} is powering on.`);
  },

  shutDown() {
    console.log(`Shutting down ${this.name}.`);
  },

  info() {
    console.log(`${this.name} is running the ${this.operatingSystem} OS.`);
  },
};