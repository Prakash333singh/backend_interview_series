// a closures is a fn that remembers the scope in which it was created
// even after that scope is gone away

///closure is when a fn remembers its lexical scope even when the fn
//is executed outside that lexical scope
// js code runs in two phases
//parsing phase
//excaution phase

//The process of determining the scopes of the variables/functions during runtime
//is called lexical scoping.

// Real-life analogy: Think of a closure as a backpack that a
//  person carries.
// Inside the backpack, there are items (variables) that the person
// can use anytime, even if they move to a different place.

function createBackpack() {
  let notepad = "My notes";

  return function () {
    console.log(notepad);
  };
}

const mybackpack = createBackpack();
console.log(mybackpack());

///closure
// all functions in JavaScript are closures,
// A closure is a function that remembers its outer variables and can access them that is: they automatically remember where they were created using a hidden [[Environment]] property, and then their code can access outer variables.
