// hoisting is a mechanism in js that put varibale and fn declaration to the top of their execution context 
//it is done during the creation phase of the execution context

//there are two types of hoisting
//1.variable hoisting are partially hoisted
//2.function hoisting are only fully hoisted

// var is hoisted and initialized with undefined
// console.log(a); //undefined 
// var a = 10;
// console.log(a); //10 

//let and const are hoisted but not initialized
// This is the time between the start of the block and the actual declaration of let or const. During this time, the variable exists but cannot be accessed.
// console.log(b); //reference error this is also called temperal dead zone condition (tdz)
// let b = 20;
// console.log(b); //20

// function hoisting(fully hoisted)
//we need first function keyword for function hoisting
// name();
// function name(){
//     console.log("code for interview")
// }


// console.log(name())
// function name(){
//     console.log("code for interview")
// } 
//function declaration 

// console.log(name()) 
// it will not work because of function hoisting only works with function declaration not with function expression
// const name = () => {
//     console.log("code for interview")
// }

// console.log(name);//undefined becuase name is varible here

// var name =()=>{
//     console.log("code for interview")
// }








