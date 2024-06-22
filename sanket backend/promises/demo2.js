function FetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("starting fetching from", url);
    setTimeout(function process() {
      let data = "dummy data";
      console.log("complted fetching the data");

      resolve(data);
    }, 4000);
  });
}

// function demo1() {
//   return new Promise(function (resolve, reject) {
//     console.log("hi");
//     setTimeout(function process() {
//       console.log("wohooh,task done");
//       resolve("by");
//     }, 10000);
//   });
// }

// demo1();
// function demo1() {
//   return new Promise(function (resolve, reject) {
//     console.log("hi");
//     setTimeout(function process() {
//       console.log("wohooh,task done");
//       resolve("i love you neetu");
//     }, 10000);
//     console.log("byeeeeeee");
//   });
// }

// let=demo1();

function demo2(x) {
  return new Promise(function (resolve, reject) {
    console.log("start");
    setTimeout(function process() {
      console.log("completed timer");
      if (x % 2 == 0) {
        resolve("even");
      } else {
        resolve("Odd");
      }
    }, 10000);
    console.log("Somewhere");
  });
}

let x = demo2(4);
console.log(x);
