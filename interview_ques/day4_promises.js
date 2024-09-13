// a promise is an object that represents the eventaul completion of aa asynchronous operation and its resulting value

// promise provide a cleaner,more readble way to handle asynchronous opertions compared to traditional callback methods

// States of a Promise
// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully
// Rejected: The operation failed.

// Concurrency: Promises can be used with Promise.all to run multiple asynchronous operations
// concurrently and wait for all of them to complete

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("data fetched successfully!!");
//       } else {
//         reject("Failed to fetch data");
//       }
//     }, 2000);
//   });
// }

// using the promise
// fetchData()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Promise.all([source1,source2]);

// Definition: Callback hell,
//  also known as the "Pyramid of Doom," refers
// to a situation where callbacks are nested within other callbacks several
//  levels deep, making the code difficult to read and maintain.

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step 3 completed");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step 3 completed");
      resolve();
    }, 1000);
  });
}

// Callback Hell
// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps completed");
//     });
//   });
// });

// In summary, callback() means "now execute the function that was
// passed to me as an argument," which allows you to chain asynchronous
// operations in a specific order.

async function executeSteps() {
  try {
    await step1();
    await step2();
    await step3();
    console.log("All steps completed!!");
  } catch (error) {
    console.log(error, "an error occurred");
  }
}
// executeSteps();

// Think of "use strict" as  set of rules for your JavaScript code.
//  When you enable it, JavaScript will be more strict about how you write your code,
//making it easier to avoid errors and write safer, cleaner code,Prevents Accidental Globals:.

// var user; // Value is undefined, type is undefined
// console.log(typeof user); //undefined

// var user = null;
// console.log(typeof user); //object

// NULL
// It is an assignment value which indicates that variable points to no object.
//the null value is a primitive value that represents the null, empty, or non-existent reference.
//Converted to zero (0) while performing primitive operations

// undefined
// It is not an assignment value where a variable has been declared but has not yet been assigned a value.
// The undefined value is a primitive value used when a variable has not been assigned a value.
// Converted to NaN while performing primitive operations

//why js is single threaded??
// JavaScript is considered single-threaded because it has a single call stack, which means it can only execute one piece of code at a time.
// Single-threaded execution simplifies the language and its execution model, making it easier to write and understand. It also reduces the overhead of context switching between threads, which can improve performance for many tasks.

// Event Loop
// The event loop is a mechanism that allows JavaScript to perform non-blocking operations even though it is single-threaded. It works with the call stack and task queues to manage asynchronous operations.

// Call Stack: Executes the current function.
// Web APIs: Handle asynchronous operations like setTimeout, fetch, etc.
// Callback Queue: Holds callbacks for completed asynchronous operations.
// Event Loop: Continuously checks the call stack and callback queue. If the call stack is empty, it pushes the first callback from the queue to the call stack.

printHello();

function printHello() {
  console.log("Hello");
  printMessage();

  function printMessage() {
    console.log("Good day");
  }
}

// printMessage();

// const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000));
// const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

// Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data));
// Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));

// let user1 = {
//   name: "Jacob",
//   age: 28,
// };

// let user2 = {
//   name: "Jacob",
//   age: 28,
// };

// console.log(user1 === user2);

// in JavaScript, the variables such as objects, arrays and functions comes under pass by reference. When you try to compare two objects with same content, it is going to compare memory address or reference of those variables. These variables always create separate memory blocks hence the comparison is always going to return false value.

////promise example

const cart = ["item1", "item2", "item3"];

const promise = createOrder(cart);
console.log(promise);

promise.then((orderId) => {
  console.log(orderId);
});

//producer

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    //createorder
    //validcart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("invalid cart");
      reject(err);
    }
    //logic for creating order
    const orderId = "12345";
    // setTimeout(() => {
    //   resolve(orderId);
    // }, 2000);
    resolve(orderId);
  });

  return pr;
}

function validateCart(cart) {
  return true;
}

// Summary:-
// Async/await is a JavaScript feature that simplifies handling asynchronous code. Async functions always return a promise, and await can be used inside async functions to pause execution until a promise is resolved. Async/await provides a cleaner syntax compared to traditional promise chaining.
// Explanation:-
// -Async functions and await keyword are used to handle promises efficiently. The await keyword can only be used inside an async function to resolve promises, simplifying asynchronous code execution.
// -Async/await in JavaScript allows the program to wait for a promise to resolve  before moving to the next line
// -JavaScript is a synchronous single-threaded language where functions are executed line by line. Asynchronous functions like promises suspend execution, allowing other events to proceed, preventing freezing or blocking of the main thread.
// -JavaScript's call stack quickly executes functions, suspending execution for promises, ensuring smooth program flow.
// -Using async/await in JavaScript is a syntactic sugar over promises, making code easier to read and understand.
// -Async/await is a new way of handling promises in JavaScript. It is recommended to use async/await for handling promises for better code readability and debugging.
// -You can use the Try{} and Catch{} method inside the Async/await for error handling.
