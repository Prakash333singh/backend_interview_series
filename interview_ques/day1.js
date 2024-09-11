let person = {
  name: "adhiakri",
  age: 21,
  greet: function () {
    console.log("hello");
  },
};

//so there are basically 2 types of data types in js
//  Primitive data types specify the size and type of variable values
// They are the building blocks of data manipulation and
// cannot be further divided into simpler data types.
//they are atomic and non mutable in nature
// types of primitive data types
//null undefined boolean string number symbol Bigint

// null there is valid variable with a value of no data type(null value)
//undefined when we declare any variable but not assiqn any value it is value to into it it automatically becomes undefined

//console.log(typeof null); //answer ->object //corner case
//console.log(typeof typeof 12); //typeof(number) string
//console.log(typeof 12);

//coersion
// it stands for type interconversation or type conversion and it is of two types
//->implicit automaticaaly changed by langauge
//console.log("5" - 2); //3
///tonumber("5")=5
//console.log("5" + 2); //"52"
// number 2 implicitly converted to string '2' tostring

//->explicit we are changing maunully
//console.log(Number("5")); // 5
// console.log(String(5));   // '5'

// console.log(typeof NaN); //not a valid number "number"
// undefined + undefined= NaN

//abstract operation
//these are operation/function which are not available for end users but js internally uses it.and these operation are mentioned in official docs of js
//there are many but we have to mainly focus on 4
//tostring
//toprimitive
//tonumber
//toboolean

//we cannot directly call them but few js operations like '-','+',etc internally calls them.

// Explain the difference between ==(Loose equality) and === (Strict equality) in JavaScript.

// Value comparison: First, == compares the values of two variables.
// Type coercion: If the types are different, JavaScript tries to convert one of the values to the same type as the other before making the comparison. This is called type coercion.
//if both the values are same return true

// first they both checks the value but after that they do  different things
// == does type chcking if types are same the it  calls ===
// === checks types and if types are not same return false

// == (loose equality) compares two values for equality, after converting both values to a common type (does  coercion).

// === (strict equality) compares two values for equality without
// performing any type conversion. Both the type and the value
// must be the same.(never does coersion)

// console.log(5 == "5"); // true (string '5' is converted to number 5)
// console.log(5 === "5"); // false (different types)

// console.log(null == undefined); //true
// //coersion ho jayega  0-0
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(null === undefined); //false

// console.log([] + []);
// The result is an empty string ''. When we are using the + operator
//  with arrays, JavaScript converts both arrays to empty strings and concatenates them.

// 10. What is the result of [] == ![]?
// Answer: The result is true. Here’s why:

// ![] is false because an empty array is truthy.
// So the expression becomes [] == false.
// false is coerced to 0 and [] is coerced to 0 in numeric context.
// Thus, the comparison 0 == 0 is true.

// 11.What is the result of true == '1' and true === '1'?
//true == '1' is true because true is coerced to 1, and '1' is coerced to 1 before comparison.

// true === '1' is false because the types are different // (boolean vs string).

// Explain the result of 4 > '5'.
// The result is false. In this comparison, the string '5' is
// coerced to the number 5, and
//  4 is not greater than 5

//NaN not a number
// it gives notion of invalid number binary search -1
// console.log(typeof NaN);
// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false

// let a = "abc";
// console.log(isNaN(a));
// When you pass the string "abc" to isNaN, JavaScript attempts to convert the string to a number.

// function expression
//is a way to define function as a part of expression rather then a standalone statement.fn expression can be assigned to a variable or passed as an argument to another function or returned from another function or stored in an object property.
/// example of function expression

var f = function (a) {
  console.log("hello");
  return a;
};

f();

// function add(a) {
//   console.log("hello", a);
// }
// add(f(6));

//scopes
//global scope that are accessible everywhere

//functinal(local scope bhi bolte)
//variables declare in local scope can be defined and usewithin sepecific fn

//block
//is like series of nested boxes within a large container each with its own set of variables

// var key word has fn scope means they are accissble thoughout the func in which they are declared
//let const have black scope means they are accessible only within a block

// redeclaration is possible with the help of var keyword

// var x = 5;
// var x = 6;
// console.log(x);

// var declarations are hoisted(lifted) to the top of their scope.
//This means the declaration is processed before any code is executed, but the assignment stays in place.This means they can be accessed even before they are declared.
// for example
// console.log(y); //undefined
// var y = 7;

//let,const block scope hote hai bhai,cannot redeclared
//let is also hoisted, but unlike var, it is not initialized to undefined.This results in a "temporal dead zone" from
// the start of the block until the declaration is encountered.
// Cannot access 'y' before initialization
// console.log(y);
// let y = 0;

//lexical scope means that the scope of a fn is determined by where the func is declared not where it is called
// function expression
// var f = function (args) {
//   console.log("hello");
// };
// console.log(f);

//  Boxing: Wrapping a primitive value in its corresponding object wrapper
// Primitive value

//Boxing is a process where JavaScript automatically converts a basic data type (like a string or a number) into an object so that it can use methods (functions) that are available on that object.

// let str = "hello";
// Accessing a method on the primitive value
// let upperStr = str.toUpperCase();

// console.log(upperStr); // "HELLO"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this keyword
// The this keyword in JavaScript is a special keyword in js that refers to the context in which a function is executed. It can be tricky because its value depends on how and where the function is called, not where it's defined.
// 1.Global Context:
// console.log(this); ///this will give the output window

// 2.Inside an object method: this refers to the object the method is called on.
// function show() {
//   console.log(this);
// }

// show(); // Logs the global object (window in browsers)
// const obj = { name: 'Alice', show: show };
// obj.show(); // Logs the

// //3. Event handlers: this refers to the DOM element that received the event.
// document.querySelector('button').addEventListener('click', function() {
//   console.log(this); // Logs the button element
// });

//can also be used with call,apply,bind
// call apply bind
// call, apply, and bind are methods in JavaScript that allow you to control the context (this keyword)
// within which a function is executed.Understanding these methods helps in controlling the this context in different situations,
// call: Invokes the function immediately, allows specifying this and individual arguments.
// apply: Invokes the function immediately, allows specifying
//this and arguments as an array.
// bind: Creates a new function with bound this and optional
//initial arguments, can be called later.

var employee1 = {
  firstName: "John",
  laststName: "doe",
};
var employee2 = {
  firstName: "mohan",
  laststName: "singh",
};

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.laststName + "," + greeting2
  );
}
// invite.call(employee1, "hello", "secccdknwdjn");
// invite.apply(employee1, ["hello", "how are you??"]);

// bind: Creates a new function with bound this and optional
//initial arguments, can be called later.
// var bindinvite = invite.bind(employee1);
// bindinvite("hello", "babayyy");
// console.log(bindinvite);

// practical usage
// useful when you want to borrow a method from
// another object and invoke it immediately

// const personY = {
//   greet: function () {
//     console.log("heloo " + this.name);
//   },
// };

// const y = { name: "Alice" };

// personY.greet.call(y); //hello alice

// apply
// useful for function that requires an array of arguments
// const numbers = [5, 6, 7, 8, 7];
// const max = Math.max.apply(null, numbers);
// console.log(max);

//bind
// Useful for setting this in callback functions or event handlers
const obj = {
  name: "Bob",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

const greet = obj.greet.bind(obj);
setTimeout(greet, 1000); // Output: Hello, Bob

//////////////////

// const boy = {
//   name: "Alice",
//   age: 30,
//   city: "Wonderland",
//   hobbies: ["reading", "gardening", "coding"],
// };

// Convert the Object to a JSON String with JSON.stringify
// const boyjson = JSON.stringify(boy);
// console.log(boyjson);

// const x = JSON.parse(boyjson);
// console.log(x);
