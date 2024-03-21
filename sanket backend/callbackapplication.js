let arr = [1, 2, 3, 4, 5];
let x = arr.map(function process(v, i) {
  //  v -> value
  //  i -> index

  //all the elements of given array it passes the elements as an
  // argument to the callbacks
  console.log(v, i);
  return v * v;
});

console.log(x);
console.log(arr);
