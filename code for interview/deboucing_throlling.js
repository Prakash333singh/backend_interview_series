///what is performance??why it is important?
//Performance refers to how efficiently a system or application runs, including factors such as speed, responsiveness, and resource usage. It is important because good performance enhances user experience, reduces load times, and ensures that applications can handle high traffic without crashing or slowing down. In web development, optimizing performance can lead to better search engine rankings and increased user retention.

//What is Debouncing?
//limit the rate at which a function is executed. It ensures that a function is only called after a specified period of inactivity. This is particularly useful for events that can fire rapidly, such as window resizing or keypress events.


// function debounce(fn,delay){
//     let timer;

//     return function(...args){
//         clearTimeout(timer);

//         timer = setTimeout(()=>{
//             //apply is used to bind to this function 
//             fn.apply(this,args);
//         },delay);
//     }
// }



//throttling
//Throttling is a technique used to limit the number of times a function can be called over a specified period. Unlike debouncing, which delays execution until a certain period of inactivity, throttling ensures that a function is executed at regular intervals, regardless of how many times the event is triggered. This is useful for events like scrolling or mouse movements, where you want to ensure that the function runs at a consistent rate.

// function throttling(func,interval){
//     let lastTime = 0;
//     return function(...args){
//         const now =Date.now();

//         if( now - lastTime >= interval){
//             lastTime = now;
//             func.apply(this,args);
//         }
//     }
// }


///memoization
//  it is related to caching
//Memoization is an optimization technique used to speed up function execution by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This is particularly useful for functions that perform complex calculations or operations that are called frequently with the same arguments.


// function sqaure(n){
//     console.log("Calculating square for",n);
//     return n * n;
// }

// function memoize(fn){
//     const cache = {};

//     return function(...args){
//        const key = JSON.stringify(args);
//        if(key in cache){
//         console.log("Cache hit",key);
//         return cache[key];
//        } else {
//         console.log("Chache miss",key);
//         const result = fn.apply(this,args);
//          cache[key] = result;
//          return result;
//        }
//     }
// }

// const memoizedSquare = memoize(sqaure);

// console.log(memoizedSquare(5));
// console.log(memoizedSquare(5)); // Cache hit
// console.log(memoizedSquare(6));
// console.log(memoizedSquare(6)); // Cache hit


//memory leak
//retains memory that is no longer needed, leading to increased memory usage and potential performance degradation over time. Memory leaks can occur due to various reasons, such as lingering references to unused objects, closures that capture variables unnecessarily, or improper management of event listeners.

// function createMemoryLeak(){
//     const largeArray = new Array(1000000).fill("leak")
//     return function(){
//         console.log(largeArray.length);
//     }
// }