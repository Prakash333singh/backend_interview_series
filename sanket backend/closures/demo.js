// function todo(task) {
//   console.log("start of code");

//   setTimeout(function fun() {
//     console.log("completed", task);
//   }, 5000);
//   console.log("end of todo");
// }

// console.log("starting");
// todo("assignment");
// console.log("Ending");

//demo 2

// function todo(task) {
//     console.log("start of code");

//     setTimeout(function fun() {
//       console.log("completed", task);
//     }, 5000);
//     task="adhikari";
//     console.log("end of todo");
//   }

//   console.log("starting");
//   todo("assignment");
//   console.log("Ending");

// demo 3

// function a(name) {
//   return function b() {
//     console.log(name);
//   };
// }

// let x = a("sanket");
// console.log(x);
// x();

// demo 4
// here var is function scope
// function test() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function exec() {
//       console.log(`i :${i}`);
//     }, i * 1000);
//   }
// }

// test();
// i :3
// i :3
// i :3

//here let is block scope only avaialble in one block

// function test() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function exec() {
//       console.log(`i :${i}`);
//     }, i * 1000);
//   }
// }

// test();

// function test() {
//   for (var i = 0; i < 3; i++) {
//     let j = 1;
//     setTimeout(function exec() {
//       console.log(`j :${j}`);
//     }, j * 1000);
//   }
// }

// test();
