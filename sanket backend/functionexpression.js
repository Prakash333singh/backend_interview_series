// var fact = function (n) {
//   if (n == 0) return 1;
//   return n * fact(n - 1);
// };

// console.log(fact(5));

// function fun() {
//   console.log("fun called");
// }

// function gun(fn) {
//   console.log("inside gun");
//   fn();
//   console.log("leaving gun");
// }

// gun(function () {
//   console.log("new function passed");
// });

var x = function gun() {
  console.log("gun");
};

console.log(typeof x, x);

function fun() {
  var x = 10;
  function gun() {}
}
