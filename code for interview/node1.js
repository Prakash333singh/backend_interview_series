// setTimeout(()=>{
//   console.log("hello prakash")
// },0);
//will goes to timer phase 


//will goes to check phase
// setImmediate(()=>{
//     console.log("setImmediate")
// });

//accoding to you it should print setTimeout(timer phase) because it comes before check phase but first setImmediate will be printed 
// The answer is it is non-deterministic, meaning either one could print first.

// When setTimeout(() => {}, 0) and setImmediate(() => {}) are called outside of an I/O (Input/Output) cycle, the execution depends on how quickly the Node.js event loop initializes and checks the timers queue versus the check queue.

// If you place both calls inside an I/O callback (like fs.readFile), the order becomes deterministic:

// fs.readFile(__filename, () => {
//   setTimeout(() => {
//     console.log("hello prakash");
//   }, 0);

//   setImmediate(() => {
//     console.log("setImmediate");
//   });
// });

// In this case,
// Output will ALWAYS be: setImmediate, then hello prakash
// In this specific I/O context, setImmediate is guaranteed to execute first because the Event Loop prioritizes moving from the Poll phase (where the I/O callback runs) directly to the Check phase before cycling back to the Timers phase.



// difference between forEach and map method
// forEach method does not return anything it just iterate over the array and perform some operation on each element of the array but map method returns a new array after performing some operation on each element of the array