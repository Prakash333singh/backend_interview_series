// console.log(1 - "1");
// console.log(undefined - 10);
// console.log(NaN - NaN);
// console.log(1 - ".");
// console.log(null - 9); //null will return +0
// console.log(10 - { a: 10 });
// console.log(
//   10 -
//     {
//       a: 10,
//       valueOf() {
//         return 8;
//       },
//     }
// );
/*
When an object is used in a mathematical operation, JavaScript will attempt to convert it to a primitive value. 
It does this by checking if the object has a valueOf method. If the valueOf method exists, JavaScript will call it to
 convert the object to a primitive value.
In this case, the valueOf method is defined within the object. 
It returns the value 8. So, effectively, the object is converted to the number 8.
*/

// console.log(
//   10 -
//     {
//       a: 10,
//       valueOf() {
//         return 5;
//       },
//     }
// );

// console.log(
//   10 -
//     {
//       a: 10,
//       valueOf() {
//         return {};
//       },
//       toString() {
//         return "5";
//       },
//     }
// );
// console.log(
//   10 -
//     {
//       valueOf() {
//         return 50;
//       },
//       valueOf() {
//         return 150;
//       },
//       a: 100,
//     }
// );

// a = { x: 2, x: 3 };

// let a = 10;

// console.log(
//   10 -
//     {
//       x: 1,
//       valueOf() {
//         return a;
//       },
//     }
// );
// console.log(
//   10 -
//     {
//       x: 1,
//       valueOf() {
//         return x;
//       },
//     }
// );

//a = { x: 2, x: 3 };
//console.log(10-{"x":1,valueOf(){return a;}})

/*
x, with a value of 1.
valueOf() method, which returns the object a.
Since the valueOf() method returns an object, JavaScript will 
attempt to convert it to a primitive value using the valueOf() and
toString() methods. However, in this case, valueOf() returns the object a.

When evaluating 10 - {"x": 1, valueOf(){return a;}}, JavaScript attempts 
to subtract an object from a number. It tries to convert the object
 to a primitive value. Since the valueOf() method returns an object
 , it doesn't directly coerce to a number.
So, the result would be NaN (Not a Number), indicating an invalid 
mathematical operation.

*/
//console.log(10-{"x":1,valueOf(){return a.x;}})

//w = { a: 8 };
// w={a:8,toString(){return "sanket"}}

// console.log(w.toString());

/*
w is an object with a single property a having a value of 8.
When you call toString() on the object w, JavaScript will try to
 convert the object to a string. Since the object w does not have 
 its own toString() method defined, it inherits the toString() method 
 from the Object prototype.
By default, the toString() method returns a string representation 
of the object in the form of [object Object].

*/

//console.log(10 - "[object Object]");

/*
When JavaScript tries to subtract a string from a number, 
it will attempt to convert the string to a number. If the string
represents a valid number, it will be converted. Otherwise, the
result will be NaN (Not a Number).
*/

//console.log(10 + "[object Object]");
//concatination will occur

//console.log(45 - { a: 10 });

console.log(
  (a = {
    x: 10,
    valueOf() {
      return a.x;
    },
  })
);
console.log(10 - a);
console.log(100 - a);

/*
When you perform arithmetic operations in JavaScript involving 
objects, JavaScript tries to convert the objects to primitive 
values using their valueOf() method. In this case, the valueOf() 
method is defined to return the value of a.x, which is 10.
So effectively, a is being coerced into the number 10.
Therefore, the expression 10 - a effectively becomes 10 - 10,
 which equals 0.
The output of the second console.log statement would be 0.

*/
