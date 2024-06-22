// function fun() {
//   return new Promise(function g(resolve, reject) {
//     setTimeout(function process() {
//       console.log("resolved");
//       resolve(123);
//     }, 5000);
//   });
// }

// let x = fun();
// x.then(function exec(value) {
//   console.log("value is", value);
// });

var x = 10;
function foo() { 
  console.log(x);
  var x = 20;
}

foo();
