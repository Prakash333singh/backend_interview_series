let name1 = {
  firstName: "sanket",
  lastName: "singh",
};

let name2 = {
  firstName: "mohan",
  lastName: "singh",
};

let printfullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

// The this keyword in JavaScript is a special keyword in js that refers to the context in which a function is executed. It can be tricky because its value depends on how and where the function is called, not where it's defined.
// 1.Global Context:
// console.log(this); ///this will give the output window
//scenario 1
// like i have 2 objects name1 and name2 and i have to use a single function printfullName to print my names
// call,apply,bind,are important functions used to manipulate the value of this by when calling methods and sharing them b/w objects.
//inside an object's method this refers to the object itself where the method is called.

//all these are methods used for function borrowing or sharing.
//call method is used to call the function with the given value and arguments can be passes individually.
///apply method is same as call method but it is used to call the function with the given value and array of arguments can be passes as an array.

///function borrowing
printfullName.call(name1, "pune", "maharashtra");
printfullName.call(name2, "champawat", "uttrakhand");

printfullName.apply(name1, ["pune", "maharashtra"]);
printfullName.apply(name2, ["champawat", "uttrakhand"]);

//bind method
///bind method is also used to override the this value but unlike call and apply it does not invoke the function instantly but returns a function with attached this value and arguments which can be call later.
let printMyName = printfullName.bind(name1, "pune", "maharashtra");
console.log(printMyName);
printMyName();
