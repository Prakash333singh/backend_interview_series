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
//null undefined boolean string number sysmbol Bigint

//console.log(typeof null); //corner case
//console.log(typeof typeof 12); //typeof(number)
//console.log(typeof 12);

//coersion
// it stands for type interconversation
//->implicit automaticaaly changed by langauge
//console.log("5" - 2); //3
///tonumber("5")=5
//console.log("5" + 2); //"52"
// number 2 implicitly converted to string '2' tostring

//->explicit we are changing maunully

// console.log(Number('5')); // 5
// console.log(String(5));   // '5'

//tyeof(NaN) not a valid number "number"
// undefined + undefined= NaN

//abstract operation not availabe for end users but js internally
//uses it

//there are many but we have to focus on 4
//tostring
//toprimitive
//tonumber
//toboolean

// . Explain the difference between == and === in JavaScript.
//actually both checks the type but the different they do different
//things// after type check
//  == does type chcking if types are same the it calls calls ===
//=== checks types and if types are not same return false

// == (loose equality) compares two values for equality, after
//  converting both values to a common type (does  coercion).

// === (strict equality) compares two values for equality without
// performing any type conversion. Both the type and the value
// must be the same.(0never does coersion)

// console.log(5 == "5"); // true (string '5' is converted to number 5)
// console.log(5 === "5"); // false (different types)

// console.log(null == undefined); //true
// //coersion ho jayega  0-0

// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(null === undefined); //false

// console.log([] + []);
// The result is an empty string ''. When using the + operator
//  with arrays, JavaScript converts both
//  arrays to strings and concatenates them.

// 10. What is the result of [] == ![]?
// Answer: The result is true. Here’s why:

// ![] is false because an empty array is truthy.
// So the expression becomes [] == false.
// false is coerced to 0 and [] is coerced to 0 in numeric context.
// Thus, the comparison 0 == 0 is true.

// What is the result of true == '1' and true === '1'?
//true == '1' is true because true is coerced to 1, and '1' is
//coerced
// to 1 before comparison.
// true === '1' is false because the types are different
// (boolean vs string).

// Explain the result of 4 > '5'.
// The result is false. In this comparison, the string '5' is
// coerced to the number 5, and
//  4 is not greater than 5

//NaN not a number
// it gives notion of invalid number binary search -1
// console.log(typeof NaN);
// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false

//let a = "abc";
//console.log(isNaN(a));
// When you pass the string "abc" to isNaN, JavaScript attempts to convert the string to a number.

// function expression
//is a way to define function as a part of expression rather then
//a standalone statement.

//scopes
//global access everywhere
//functinal(local scope bhi bolte)
//variables declare in local scope can be defined and usewihin sepecific
// fn
//block
//is like series of nested boxes within a large container
//each with its own set of variables

// var key word has fn scope
//meeans they are accissble thoughout the func in which they are declared
//let const have black scope means they are accessible only within
//a block

// redeclaration is possible with the help of var keyword

// var declarations are hoisted(lifted) to the top of their scope.
// This means the declaration is processed
// before any code is executed, but the assignment stays in place.
//This means they can be accessed even before they are declared.

// console.log(y);
// var y = 7;

//let,const block scope hote hai bhai,cannot redeclared
//let is also hoisted, but unlike var, it is not initialized
//to undefined.This results in a "temporal dead zone" from
// the start of the block until the declaration is encountered.
// console.log(y);
// let y = 0;

//lexical scope means that the scope of a fn is determined by where
// the func is declared not where it is called

// function expression
// var f = function (args) {
//   console.log("hello");
// };
// console.log(f);

//  Boxing: Wrapping a primitive value in its corresponding object wrapper
// Primitive value

//Boxing is a process where JavaScript automatically converts a basic
// data type (like a string or a number) into an object so that it
//  can use methods (functions) that are available on that object.

// let str = "hello";

// Accessing a method on the primitive value
// let upperStr = str.toUpperCase();

// console.log(upperStr); // "HELLO"
