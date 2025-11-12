// odm vs orm
// An ORM(Object-Relational Mapping) acts as a translator between the object-oriented code you write and the relational tables in your database.
//Sequelize (for Node.js)
// orm have object-to-database mapping capabilities 

//Prisma consists of three main parts that work together:

// Prisma Schema: This is a single, declarative configuration file (schema.prisma) that defines your database schema and your data models in a human-readable and database-agnostic way.

// Prisma Client: This is an auto-generated, type-safe query builder that allows you to interact with your database from your application code (e.g., Node.js, TypeScript, Go).

// Prisma Migrate: This is a powerful migration tool that helps you evolve your database schema in a controlled and versioned manner.
//Step 1: Define Your Schema (create a file name schema.prisma)
// step 2: Migrate Your Database (for initial setup and schema changes)(npm prisma db push)
// Step 3: Generate the Prisma Client (this step will automatically takes place after running above command )
//now Interact with Your Database using Prisma Client


// This is used with document databases (like MongoDB, CouchDB). These databases store data in a flexible, semi-structured format, typically as JSON or BSON documents. These documents can have different structures within the same collection.
//  An ODM acts as a translator between the objects in your code and the documents in your database.

// let person = {
//   name: "adhiakri",
//   age: 21,
//   greet: function () {
//     console.log("hello");
//   },
// };

//so there are basically 2 types of data types in js
//  Primitive data types specify the size and type of variable values
// They are the building blocks of data manipulation and
// cannot be further divided into simpler data types.
//they are atomic and non mutable in nature
// types of primitive data types
//null undefined boolean string number symbol Bigint

// non-primitive data types (also known as reference data types) are more complex data structures that can hold multiple values or properties.
// They are mutable and can be modified after their creation.
// types of non-primitive data types
// object array function date
//object is a collection of key value pairs
// let obj = {
//   name: "adhiakri",
//   age: 21,
//   greet: function () {
//     console.log("hello");
//   },
// };
// bigint // it is used to represent integers with arbitrary precision and can be used for very large numbers that exceed the range of the Number type.

// null there is valid variable with a value of no data type(null value)
//undefined when we declare any variable but not assign any value it is value to into it is automatically becomes undefined

//console.log(typeof null); //answer ->object //corner case
//console.log(typeof typeof 12); //typeof(number) string
//console.log(typeof 12);

//coersion
// it stands for type interconversation and it is of two types
//->implicit automatically changed by language
//console.log("5" - 2); //3
///tonumber("5") = 5

// + will call tostring function - will call tonumber automatically
//console.log("5" + 2); //"52"
// number 2 implicitly converted to string '2' tostring

//->explicit we are changing maunully
//console.log(Number("5")); // 5
// console.log(String(5));   // '5'

// console.log(typeof NaN); //not a valid number "number"
// undefined + undefined= NaN

//abstract operation
//these are operation/function which are not available for end users but javascript internally uses it.and these operation are mentioned in official docs of js
// there are many but we have to mainly focus on 4
//tostring
//toprimitive
//tonumber
//toboolean

//we cannot directly call them but few js operations like '-','+',and other operations internally calls them.

// Explain the difference between ==(Loose equality) and === (Strict equality) in JavaScript.

// Value comparison: First, == compares the values of two variables.
// Type coercion: If the types are different, JavaScript tries to convert one of the values to the same type as the other before making the comparison. This is called type coercion.
//if both the values are same return true

// first they both checks the value but after that they do different things
// == does type checking if types are same the it  calls ===
// === checks types and if types are not same return false

// == (loose equality) compares two values for equality, after it convert converting both values to a common type (does  coercion).
// === (strict equality) compares two values for equality without performing any type conversion. Both the type and the value must be the same.(never does coersion)

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
// console.log(isNaN(a));true
// When you pass the string "abc" to isNaN, JavaScript attempts to convert the string to a number.

// function expression
//is a way to define function as a part of expression rather then a standalone statement.fn expression can be assigned to a variable or passed as an argument to another function or returned from another function or stored in an object property.
/// example of function expression.

// var f = function (a) {
//   console.log("hello");
//   return a;
// };

// f();

// function add(a) {
//   console.log("hello", a);
// }
// add(f(6));

//scopes
//global scope that are accessible everywhere

//functional(local scope bhi bolte)
//variables declare in local scope can be defined and use within sepecific fn

//block
//it is like series of nested boxes within a large container each with its own set of variables

// {
//   var x = 8;
//   let x = 5; ///function
//shadowing let with var is illegal in javascript
//   {
//     var x = 8;
//     // console.log(x);
//   }
// }

// var key word has fn scope means they are accissble thoughout the func in which they are declared
//let,const have block scope means they are accessible only within a block
// redeclaration is possible with the help of var keyword
// var x = 5;
// var x = 6;
// console.log(x);

// var declarations are hoisted(lifted) to the top of their scope.
//This means the declaration is processed before any code is executed, but the assignment stays in place.This means they can be accessed even before they are declared.
// for example
// console.log(y); //undefined
// var y = 7;


//why let/const were introduced 
//because var are not block scoped like If you declare var inside an if block or a for loop, it will still be accessible outside that block

// for (var i = 0; i < 3; i++) {
  // Loop body
// }
// console.log(i); // 'i' is still accessible here, and its final value is 3 (problematic in loops)


//let,const block scope hote hai bhai,cannot redeclared
//let is also hoisted, but unlike var, it is not initialized to undefined.This results in a "temporal dead zone" from
// the start of the block until the declaration is encountered.
// Cannot access 'y' before initialization
// console.log(y);
// let y = 0;

//lexical scope means that the scope of a fn is determined by where the func is declared not where it is called so js engine first looks the variable/function in the local scope and if not found then it looks in the lexical enviornment of its parent scope

//global execution context holds reference to NULL

// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// a();
// console.log(b);


///javascript runs in two phases complition phase (Parsing/Creation) Phase and excaution phase 
// Phase 1: Compilation/Parsing/Creation Phase
// This phase happens before any of your code actually runs. The JavaScript engine goes through your code line by line, but it's not executing operations; it's setting up the environment. During this phase, the following key things occur:
// Lexical Analysis (Tokenization): The code is broken down into a stream of tokens (keywords, identifiers, operators, etc.).
// var x = 10; becomes tokens like var, x, =, 10, ;.
// Parsing: The tokens are then used to build an Abstract Syntax Tree (AST). The AST is a tree representation of the syntactic structure of your code. If there are syntax errors, they are caught here.
// Scope Creation: The engine determines the different scopes (global scope, function scopes) in your code.
// Hoisting: This is a crucial step for understanding var and function declarations. During the compilation phase, var declarations and function declarations are "hoisted" (moved conceptually) to the top of their respective scopes.
// For var variables, only the declaration is hoisted, not the initialization. They are automatically initialized to undefined.
// For function declarations, both the declaration and the definition (the actual code inside the function) are hoisted.

// Memory Allocation for Variables and Functions: The engine allocates memory for all identified variables and functions within their respective scopes. For var variables, they are assigned the initial value of undefined. Function declarations are fully placed into memory.

// Think of it like this: Before a chef starts cooking (execution), they first read the entire recipe, understand the steps, gather all the ingredients (variables), and set up their stations (scopes). They might even pre-chop some vegetables (hoisting var to undefined).

// Phase 2: Execution Phase
// After the compilation phase is complete and the environment is set up, the engine starts executing the code line by line, performing the operations defined in your program.

// During this phase:
// Assignments: Values are assigned to variables.
// Function Calls: Functions are invoked, and their code runs.
// Expression Evaluation: Expressions are evaluated (e.g., 2 + 3 becomes 5).
// Code Logic: The actual logic of your program unfolds.

///garbage collection it work on mark of sweep algorithms
//lexical means kha apka code likha hua hai 
//scope means kha pe usko kitna access hai

// Closure:
// The function c() is nested inside a(), and it has access to b because b is defined in its parent function a(). This is an example of a closure in JavaScript. Closures allow inner functions to access variables from their outer functions.
// b is not accessible in the global scope.The variable b is function-scoped and exists only inside the function a().

///function bundled with lexical scope is called closure
// lexical scope means that the scope of a fn is determined by where the func is declared not where it is called

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

// const obj = { name: "Alice", show: show };
// obj.show(); // Logs the object itself

// //3. Event handlers: this refers to the DOM element that received the event.
// document.querySelector("button").addEventListener("click", function () {
//   console.log(this); // Logs the button element
// });

//can also be used with call,apply,bind
// call apply bind
// call, apply, and bind are methods in JavaScript that allow you to control the context (this keyword) within which a function is executed.Understanding these methods helps in controlling the this context in different situations,
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
// another object and invoke it immediately.

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
// const obj = {
//   name: "Bob",
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };

// const greet = obj.greet.bind(obj);
// setTimeout(greet, 1000); // Output: Hello, Bob

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
