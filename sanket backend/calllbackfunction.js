function fun(x, fn) {
  // x->number
  // fn-> callback function

  //same logic
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn(); //calling the callback function passed
  //show more logic
}

// fun(10, function log() {
//   //this is the call back function
//   console.log("custom logeer");
// });

// fun(20, function () {
//   console.log("anonymous logger");
// });

function gun() {
  console.log("inside gun");
}

fun(15, gun);
