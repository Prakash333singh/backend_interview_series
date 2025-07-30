/*
useEffect is a React Hook that allows you to perform side effects in function components. A side effect could be anything that affects something outside the component or occurs after the initial rendering, such as:

Fetching data from an API.
Subscribing or unsubscribing to services (e.g., WebSockets, timers).
Manipulating the DOM directly (although rarely needed in React).
Setting up or cleaning up resources like timers, event listeners, etc.
The useEffect Hook helps React synchronize the component with external systems, making sure that your component behaves correctly after its render.

 
useEffect(() => {
    
     // Effect: Fetch data from an API
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  // Effect: code that runs after render (side effect)
  return () => {
    // Optional Cleanup: runs when component unmounts or before re-running the effect
  };
}, [dependencies]); // dependencies array



*/

///in my video calling app i have two different servers
// web application serever
//peerjs server - peerjs server is where your peer-to-peer connections will be managed
// The PeerJS server (which manages the signaling for peer-to-peer connections) needs to run separately from your web server. By default, PeerJS uses a different port (e.g., 9000 as specified in your code).
// Keep your app server on localhost:3000 for serving your frontend (React app) and backend (Socket.io).
// Run a PeerJS server on a separate port, such as 9000.



// console.log("start");

// setTimeout(() => {
//   console.log("timeout 1");
// }, 0);

// setImmediate(() => {
//   console.log("immediate 1");
// });

// console.log("end");
// Absolutely! Let's take your **original example** and use it to explain the **Node.js event loop phases step by step** in **easy words**.

// ---

// ### ✅ Your Code Again:

// ```js
// console.log("start");

// setTimeout(() => {
//   console.log("timeout 1");
// }, 0);

// setImmediate(() => {
//   console.log("immediate 1");
// });

// console.log("end");
// ```

// ---

// ## 🧠 First, What is the **Event Loop**?

// The **event loop** is how Node.js handles:

// * Synchronous code (line by line)
// * Asynchronous code (callbacks, timers, I/O, etc.)

// It runs in **phases** like a roundabout — each phase checks if it has tasks to run.

// ---

// ## ✅ Event Loop Phases (in order)

// Let’s walk through each phase **with your code**:

// ---

// ### 🟢 1. **Synchronous Phase (Before Event Loop)**

// ```js
// console.log("start");    // prints immediately
// setTimeout(...);         // registered to run later
// setImmediate(...);       // registered to run later
// console.log("end");      // prints immediately
// ```

// 🧾 Output so far:

// ```
// start
// end
// ```

// ---

// Now the event loop begins its cycles:

// ---

// ### 🔵 2. **Timers Phase**

// This phase runs **callbacks from `setTimeout()` and `setInterval()`**.

// Even though you wrote `setTimeout(..., 0)`, **Node waits a little bit (min \~1ms)** and then runs it in this phase.

// ```js
// setTimeout(() => {
//   console.log("timeout 1");
// }, 0);
// ```

// ✅ So now it prints:

// ```
// timeout 1
// ```

// ---

// ### 🟣 3. **Pending Callbacks Phase**

// This phase is used for **internal system tasks**, like TCP errors.
// **Not used in your code**, so it's skipped here.

// ---

// ### 🟠 4. **Poll Phase**

// This phase checks for:

// * New I/O events (like file reading)
// * Timer readiness
// * If there’s nothing to do, it **waits or moves to next phase**

// Since there’s nothing pending here, it moves on.

// ---

// ### 🔴 5. **Check Phase**

// This is where **`setImmediate()`** callbacks run!

// ```js
// setImmediate(() => {
//   console.log("immediate 1");
// });
// ```

// ✅ So now it prints:

// ```
// immediate 1
// ```

// ---

// ### 🟤 6. **Close Callbacks Phase**

// For `socket.on('close')`, etc. — not used here.

// ---

// ## ✅ Final Output:

// ```
// start
// end
// timeout 1
// immediate 1
// ```

// ---

// ## 📊 Summary Table:

// | Phase                | What It Does                    | In Your Code    |
// | -------------------- | ------------------------------- | --------------- |
// | 🟢 Synchronous       | Runs immediately                | `console.log()` |
// | 🔵 Timers            | `setTimeout()`, `setInterval()` | ✅ yes           |
// | 🟣 Pending Callbacks | Internal error callbacks        | ❌ no            |
// | 🟠 Poll              | Waits for new I/O               | ❌ no            |
// | 🔴 Check             | Runs `setImmediate()`           | ✅ yes           |
// | 🟤 Close Callbacks   | Runs `on('close')` handlers     | ❌ no            |

// ---

// ## ✅ Visual Flow (for your example):

// ```plaintext
// Main Thread:
//   console.log("start")
//   setTimeout(...)
//   setImmediate(...)
//   console.log("end")

// Event Loop Starts:
//   🔵 Timers → setTimeout runs
//   🔴 Check → setImmediate runs
// ```

// ---






// ## ✅ 📘 Example: Covers All Main Event Loop Phases

// ```js
// const fs = require("fs");

// console.log("🟢 1. Start (Synchronous)");

// setTimeout(() => {
//   console.log("🔵 2. Timers Phase (setTimeout)");
// }, 0);

// setImmediate(() => {
//   console.log("🔴 3. Check Phase (setImmediate)");
// });

// fs.readFile(__filename, () => {
//   console.log("🟠 4. Poll Phase (I/O Callback)");

//   setTimeout(() => {
//     console.log("🔵 5. Timer inside I/O (setTimeout in poll)");
//   }, 0);

//   setImmediate(() => {
//     console.log("🔴 6. Immediate inside I/O (setImmediate in poll)");
//   });

//   process.nextTick(() => {
//     console.log("🟡 7. process.nextTick (Microtask after I/O)");
//   });
// });

// process.nextTick(() => {
//   console.log("🟡 8. process.nextTick (Microtask after sync)");
// });

// Promise.resolve().then(() => {
//   console.log("🟡 9. Promise.then (Microtask after sync)");
// });

// console.log("🟢 10. End (Synchronous)");
// ```

// ---

// ## 🧾 **Expected Output (in order):**

// ```
// 🟢 1. Start (Synchronous)
// 🟢 10. End (Synchronous)
// 🟡 8. process.nextTick (Microtask after sync)
// 🟡 9. Promise.then (Microtask after sync)
// 🔵 2. Timers Phase (setTimeout)
// 🔴 3. Check Phase (setImmediate)
// 🟠 4. Poll Phase (I/O Callback)
// 🟡 7. process.nextTick (Microtask after I/O)
// 🔴 6. Immediate inside I/O (setImmediate in poll)
// 🔵 5. Timer inside I/O (setTimeout in poll)
// ```

// ---

// ## 🔍 Breakdown of Each Phase:

// | Phase                       | Code Line                          | What It Shows                           |
// | --------------------------- | ---------------------------------- | --------------------------------------- |
// | **Synchronous**             | Top & bottom `console.log()`       | Runs immediately                        |
// | **Microtasks (after sync)** | `process.nextTick`, `Promise.then` | Always run right after sync code        |
// | **Timers Phase**            | First `setTimeout()`               | Runs after timers phase starts          |
// | **Check Phase**             | First `setImmediate()`             | Runs in check phase                     |
// | **Poll Phase**              | `fs.readFile()` callback           | Runs when I/O finishes                  |
// | **Microtasks (after I/O)**  | `process.nextTick()` inside I/O    | Runs before moving to check phase again |
// | **Check (again)**           | `setImmediate()` inside I/O        | Runs again in check phase               |
// | **Timers (again)**          | `setTimeout()` inside I/O          | Runs in next timers phase               |

// ---

// ## 🧠 Key Concepts Demonstrated:

// * **Synchronous first**, then **microtasks** (`nextTick`, `Promise.then`)
// * **Timers phase** for `setTimeout()`
// * **Check phase** for `setImmediate()`
// * **Poll phase** handles `fs.readFile()` and queues more callbacks
// * **Microtasks run between every phase**

// ---

// ## ✅ Final Summary:

// | 🔁 Phase       | Triggered By                  |
// | -------------- | ----------------------------- |
// | 🟢 Synchronous | Regular code                  |
// | 🟡 Microtasks  | `process.nextTick`, Promises  |
// | 🔵 Timers      | `setTimeout`, `setInterval`   |
// | 🟠 Poll        | I/O callbacks (`fs.readFile`) |
// | 🔴 Check       | `setImmediate()`              |
// | 🟤 Close       | `socket.on('close')`, etc.    |

// ---

