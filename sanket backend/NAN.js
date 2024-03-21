let a = "10";
let b = "abc";
let c = "sanket";
let d = 10 - c;

console.log(isNaN(a));

// The isNaN() function in JavaScript checks whether a value is
//  "Not-a-Number" (NaN).
// When you use isNaN() with a non-numeric string, it first attempts
// to convert the string to a number. If it can be successfully
//  converted to a number, isNaN() returns false. If it cannot be
//  converted to a number, then isNaN() returns true.

console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));
console.log(isNaN(NaN));
