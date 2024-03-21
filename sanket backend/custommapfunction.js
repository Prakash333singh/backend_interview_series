function mapper(arr, fuck) {
  // arr -> is going to be an array of elements
  // fn callback function which expects two arguments value and index

  //creating a result and finally returing the result array
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // i indexe
    // arr[i]->value
    //console.log("hey this ffff1");
    let res = fuck(arr[i], i);
    result.push(res);
    //console.log("hey this f1", result);
  }
  return result;
}
let arr = [1, 2, 3, 4, 5];

let x = mapper(arr, function cuber(v, i) {
  console.log(v, v * v * v, i);
  return v * v * v;
});

console.log(x, arr);
