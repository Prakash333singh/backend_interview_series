//a shallow copy creates a new object,but only copies references for nested objects/arrays

// const original={
//     name:"Prakash",
//     address:{
//         city:"Bangalore",
//         state:"Karnataka"
//     }
// }

// //shallow copy
// const shallowcopy={...original};
// console.log(shallowcopy);

// shallowcopy.name="Adhikari"
// shallowcopy.address.city="Mumbai"
// console.log(original);
// console.log(shallowcopy);


//deep copy 
// a deep copy creates a completely new object ,including copies of all nested objects/arrays
//so changes in the copy don't affect the original object

// const original={
//     name:"Prakash",
//     address:{
//         city:"Bangalore",
//         state:"Karnataka"
//     }

// }

//deep copy
// const deepcopy = structuredClone(original);


// deepcopy.name="lendi";
// deepcopy.address.city="Nainital"

// console.log(original);  
// console.log(deepcopy)

// prototype vs __proto__

// prototype: Property on constructor functions. Used when creating objects via new.

// proto: Property on objects that points to the prototype they were created from.


///how can u prevent function being called multiple times
//we can control repeated calls using techniques like debouncing ,throttling,or using a flag

// How it works:
// Debounce: delays execution until no calls happen for a period.
// Throttle: ensures function runs at most once per time window.
// Flag: store state and prevent repeated execution.

// 🟦 1. Debouncing

// Definition:
//multiple requets ko minimize krne k liye use hota hai
//specific time ke liye avoid krta hai
// Debouncing ensures that a function runs only after a certain amount of time has passed without it being called again.

// 👉 Think of typing in a search box: You don’t want to call the API on every keystroke, but only when the user stops typing.

// How it works:

// Reset a timer every time the function is invoked.

// Only if the timer completes (no new calls), the function executes.

// Example (Search box):

function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function search(query) {
  console.log("API Call for:", query);
}

const debouncedSearch = debounce(search, 500);

// Called multiple times as user types
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");
debouncedSearch("hell");
debouncedSearch("hello"); 
// ✅ Only "hello" triggers API after 500ms


