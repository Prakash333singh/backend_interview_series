console.log("heelllo1");

setTimeout(function hello() {
  console.log("hello");
}, 1000);

console.log("hellllo2");

let id1 = setTimeout(function execute1() {
  //some task
  console.log("task completed 1");
}, 7000);

let id2 = setTimeout(function execute2() {
  //some task
  console.log("task complted 2");
  clearTimeout(id1);
}, 5000);
