//hof-there are function which take another function as arguments
//these are called hof

function f(x, fn) {
  // x-number
  // fn-function

  console.log(x);
  console.log(fn);
  fn();
}

f(10, function exec() {
  //callback
  console.log("i am an expression passed in hof");
});

///arrays are also custom objects in js
//index of the element is the key and the element itself is the value

//map function
//
