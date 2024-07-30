/*
- Prototype objects
    - The term prototype is used to refer two distinct, but still related concepts.
        - The object prototype.
            - The object prototype is the object that is referenced by objects created by a constructor function. By default, the constructor function sets the object prototype for the objects it creates, to the constructor’s prototype object.
        - The function prototype (also called the constructor’s prototype object).
            - This is the object used by the constructor function as the object prototype. Each object that the constructor creates, inherits from the function prototype. The function prototype is stored within the constructor’s `prototype` property. This property is only used when a function is called as a constructor through the use of the `new` keyword.
*/

// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = Lizard();
// console.log(lizzy)


// let checkThisObj = {
//   whatIsThis() {
//     return this;
//   },
// };

// // console.log(checkThisObj.whatIsThis() === checkThisObj);

// let test = checkThisObj.whatIsThis;

// console.log(test() === checkThisObj);
// console.log(test() === window);



// DONT DELETE

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