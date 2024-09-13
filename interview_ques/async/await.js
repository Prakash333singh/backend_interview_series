// Async and Await in JavaScript is used to simplify handling asynchronous operations using promises
// and async function always return a promise
// The await keyword is used to wait for a promise to resolve.and Await can only be used inside the async Function and it is just syntactic sugar over promises
// And async function always returns a promise
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved");
//   }, 5000);
// });

// async function handlePromise() {
//   //he basic difference b/w promise and async/await is async/await will wait for the promise to resolve and await gets its value meanwhile promise doesn't wait for the value it directly moves to the The next line of code.

//   const val = await p;
//   //Js engine will wait for the promise to resolve await will get value
//   ///wait for promise to get resolved
//   console.log(val);
//   console.log("hello");
// }
// handlePromise();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value!!");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value!!");
  }, 5000);
});

async function handlePromise() {
  console.log("hello world");
  //js engine was waiting for the promise to be resolved
  const val1 = await p1;
  //the JS will never wait here only function is
  ///suspend till the promise fulfilled
  console.log("Namste Javascript 11111");
  console.log(val1);
  const val2 = await p2;
  console.log("Namste Javascript 22222");
  console.log(val2);
}

// handlePromise();

// Fetch ()is a promise when this promise gets resolved it gives a response object and this response object has a body that has a readable steam and if you want to convert this readable stream into JSON you have todo response.json() it is also a promise when it gets resolved it gives a data.
// async function fetchapi() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   //it will return a readable stream
//   const jsonValue = await data.json();
//   console.log(jsonValue);
// }
// fetchapi();

// Error handling with async/wait using try/catch
async function fetchapi() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (error) {
    console.log(error);
  }
}
fetchapi();
// The advantages of using async/wait is avoiding promise chaining in async/await.
