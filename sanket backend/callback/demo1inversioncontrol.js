function fun(inputString, fn) {
  //executes some algorithms on the string

  let output = inputString.split(",");
  for (let i = 0; i < output.length; i++) {
    fn(output[i]);
  }
}

fun("Name:Prakash ,subject:cse", function process(ip) {
  let arr = ip.split(":");
  console.log("{", arr[0], "=>", arr[1], "}");
});
