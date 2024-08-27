// a first order fn is a fn that doesn't accept another function
//  as an argument and doesn't return as its return value

// const firstOrder = () => console.log("I am a first order function!");

// firstOrder();

// higher order function
// a hof is a fn that accepts another fn as an argument or returns a function as a return value or both

// const firstOrder = () => console.log("I am a first order function!");
// const higherOrder = (x) => x();

// higherOrder(firstOrder);

// a pure function is a fn where the return value is only determined by its
// arguments without any side effects
//and
// if you call a function with the same argument n number of Times
// and n number of places in the application the it will always
// return the same value

// function somemethod() {
//   console.log(counter1); ///undefined
//   console.log(counter2); //refernace error

//   var counter1 = 1;
//   let counter2 = 1;
// }
// somemethod();

//iife(immediately invoked function expression)

// js fn that runs as soon as it is defined

// (function () {
//   var message = "IIFE";
//   console.log(message);
// })();
//console.log(message);

// let uri = "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log(encoded_uri, decoded_uri);

// callback function
// a callback function is a function passed into another function
//as a argument
// const prompt = require("prompt-sync")();
// function callbackfunction(name) {
//   console.log("hello " + name);
// }
// function outerfunction(hey) {
//   let name = prompt("plz enter your name ->");
//   hey(name);
// }

// outerfunction(callbackfunction);
