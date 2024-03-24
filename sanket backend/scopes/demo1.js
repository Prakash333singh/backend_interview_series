//https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/

// function exampleBlockScope() {
//   if (true) {
//     let blockVariable = "I'm block-scoped with 'let'";
//     const constantBlockVar = "I'm block-scoped with 'const'";
//   }
//   console.log(blockVariable); // Error: blockVariable is not defined
//   console.log(constantBlockVar); // Error: constantBlockVar is not defined
// }

// var a = "I'm global";

// function firstFunction() {
//   var a = "I'm in firstFunction";

//   function secondFunction() {
//     console.log(a); // Accesses a from firstFunction, not the global a
//   }

//   secondFunction();
// }

// firstFunction();

// function outerFunction() {
//   var outerVariable = "I'm in outerFunction";

//   function innerFunction() {
//     outerVariable = "neetu i love you";
//     console.log(outerVariable); // Accesses outerVariable from the outer scope
//   }

//   return innerFunction;
// }

// var closure = outerFunction();
// console.log(closure);
// closure(); // This still has access to outerVariable

function createCounter() {
  var count = 0;
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

var counter = createCounter();
console.log(counter.increment());
console.log(counter.getCount()); //
