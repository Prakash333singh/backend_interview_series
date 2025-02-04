//closure is when a function remembers its lexical scope even when the function is executed outside the lexical scope
// function bundled with lexical scope is called closure.
//lexical scope is determined by where the function is declared not where it is called

//The process of determining the scopes of the variables/functions during runtime is called lexical scoping.

// Real-life analogy: Think of a closure as a backpack that a person carries.
// Inside the backpack, there are items (variables) that the person
// can use anytime, even if they move to a different place.

function createBackpack() {
  let notepad = "My notes";

  return function () {
    console.log(notepad);
    // return notepad;
  };
}

const mybackpack = createBackpack();
console.log(mybackpack());

///closure
// all functions in JavaScript are closures
// A closure is a function that remembers its outer variables and can access them that is: they automatically remember where they were created using a hidden [[Environment]] property, and then their code can access outer variables.

// function closure() {
//   var a = 10;
//   return function () {
//     console.log(a);
//   };
// }

// const myclosure = closure();
// console.log(myclosure());

///how javascript code runs

//everything in js happens inside an execution context which contains
//memory component - place where variables and fucntions are stored in key value pairs (also known as variable environment)

//code component-where code is executed one line at a time also known as thread of execution

// js is synchronous single threaded language js can only execute one line of code at a time

//what happens when a we run a js code??
//an excecution context is created there are 2 phases of running a js program
// memory allocation phase - where variables and functions are stored in memory
//code execution phase -where js program is actually executed line by line and variables are assigned with some and function execution takes place.

// Every function has it’s own execution context and which is created every time when a function is invoked and after the function is executed the execution context is deleted.

// for creating execution and deleting it for every function can be a challenging task — for this JS uses call stack !

// Initially one global execution context is created with variable environments and thread of execution and this global EC is pushed in the call stack. As we go through the code in GEC we see 2 function calls which will also create it’s own execution context one at a time and execute the function. After the functions have been executed their execution context will be deleted from the call stack and finally the GEC will also be deleted at the end.

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);
