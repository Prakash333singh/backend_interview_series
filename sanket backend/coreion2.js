//console.log(undefined - 3);
///undefined is not a valid number Tonumber(undefined)-NaN

//console.log(null - 5);
//tonumber(nulll)->+0

//console.log("132" - 10);
//tonumber "132"->132

//console.log("12fd" - 20);
//tonumber("12fd")->NAN

//console.log(4 - true);

//console.log("0xf" - 1);

/*
"0xf" is a string but in the starting we have 0x which denotes 
start of hexadecimal number 
Tonumber("0xf")->15
15-1

*/

//console.log("0xz" - 1);
//oxz is having 0x in the starting to denote hexadecimal,but z is not
//a valid hexadecimal Number
//NaN-1

// console.log("abcd" - 10);
// console.log("0o11" - 10);
/*
Tonumber(0o11)-> 9
*/

// let a = { english: 90, maths: 100 };
// console.log(a.toString());
// console.log(a.valueOf());

// let x = [1, 2, 3];
// console.log(x.toString());
//toString [1,2,3]->1,2,3
// console.log(x.valueOf());
//[1,2,3]

//console.log("sanket" + { a: 10 });

/*
"sanket" is already a primitive
{"a":10} is not a primitive so we call toprimitive without a hint
means hint ->number
we first call valueof on {a:10} it will return same object
we call tostring it will return '[object Object]' which is 
a string (primitive)
so we will get sanket[object Object]
*/

//console.log(10 - { a: 40 });

/*
10 is already a number
{"a":40} is not a primitive so we call toprimitive without a hint
means hint ->number
we first call valueof on {a:10} it will return same object
we call tostring it will return '[object Object]' which is 
a string (primitive)
so call ToNumber on '[object Object]' again which gives NaN
10 - NaN -> NaN 
*/

// let x={"b":90, valueOf(){return 2;},toString(){return "custom";}}
// console.log(x-10);

// console.log(!-4);
console.log(NaN === NaN); //false
console.log(33 === 33); //t
console.log(23 == 35); //f
console.log(0 === -0); //t
console.log(undefined === undefined); //t
console.log(null === null); //t
console.log("sanket" === "sanket"); //t
let x = {};
console.log(x === x); //true
//console.log({} === {});//false
console.log(null === undefined); //true
console.log(10 == "10"); //true
console.log(10 === "10"); //false

console.log(false == 0); //true
console.log(false === 0); //false
console.log("99" == 99); //true
console.log("99" === 99); //false
console.log(
  10 ==
    {
      valueOf() {
        return 10;
      },
    }
); //ture

let a = 5;
if (a) {
  console.log("hi there");
}

if (a == true) {
  console.log("by by");
}
