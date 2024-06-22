// console.log("start of the file");

// setTimeout(function timer1() {
//   console.log("timer 1 done");
// }, 0);

// for (let i = 0; i < 1000000000; i++) {
//   //something
// }

// let x = Promise.resolve("neeetu's promise");
// x.then(function processPromise(value) {
//   console.log("whose promise ??", value);
// });

// setTimeout(function timer2() {
//   console.log("Timer 2 done");
// }, 0);

// console.log("End of the file");

// example 2

function dummyPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("timer's promise");
    }, 0);
  });
}

console.log("start of the file");

setTimeout(function timer1() {
  console.log("timer 1 done");
  let y = dummyPromise();
  y.then(function promise(value) {
    console.log("whose promise", value);
  });
}, 0);

let x = Promise.resolve("neeetu's promise");
x.then(function processPromise(value) {
  console.log("whose promise ??", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");
