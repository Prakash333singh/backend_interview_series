// execution context is a env in which js code is executed
// it has two phases
// 1.creation phase
// 2.execution phase

//there are two types of execution context
//1.global execution context(js file)
//2.function execution context (js function)

//global execution context
//1. it creates a global object (window in browser and global in node js)
//2. it creates a this object (in global this points to global object)
//3. it creates a memory space for all the variables and functions defined in the global scope and initialize them with undefined

//hositing is happen in every execution context and ec and hoisting work together

// example 1
// function demo() {
//   console.log(name); //undefined because of variable hoisting
//   var name = "assignment";
//   console.log(name); //assignment
// }


//expample 2

// function demo() {
//   console.log(name);//assignment
// }
// console.log(name);//undefined because of variable hoisting 
// var name = "assignment";
// demo(); 

//example 3 

//  var name ="prakash"
//  function demo(){
//     console.log(name);//undefined
//     var name = "assignment";
//     console.log(name);//assignment
//  }

//  demo();
 ///there will first print undefined because hoisting is happen in every exection context then inside demo function there will be fun execution context then the first undefined will print then assignment  

// var name="prakash"
// function demo(){
//  console.log(name);
// }
// demo();

//there will be two execution context and inside function execution context there is no variable with name so it will look for the variable in global execution context and print prakash


//global execution context gives access to this and window object
//function ex gives access to this and arguments

// function one(){
//     console.log(name)
//     //name is not declare here so it will go to global execution context
// }

// function two(){
//    var name="adhikari"
//    one()
// }

// var name="Prakash"
// two()

/////////////////////////////////////


// function two(){
//    var name="adhikari"
//    //yeah wala function two wale function ke exacution context likha hua hai this is called scope chaining
//    return function one(){
//     console.log(name)
//    }
// }

// var name="Prakash "
// two()()

// lexical enviorment is defined where the function is defined not where the function is called
// function scope will work with var keword 
//block scope will work with let and const 

// var script =(()=>{
//     console.log("hello")
// })()

// script


//this is an object in js which is pointing to the function where it is called 