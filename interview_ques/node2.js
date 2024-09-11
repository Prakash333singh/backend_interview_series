///what is cookie??

// A cookie is a small piece of data that a server sends to a user's web browser. The browser stores this data and sends it back to the server with future requests to the same server. Cookies are used for various purposes, such as:

// Session Management: Keeping users logged in as they navigate a site.
// Personalization: Storing user preferences and settings.
// Tracking: Collecting data on user behavior for analytics or advertising.
// What is cookie-parser?
// In lame terms, cookie-parser is a tool that helps web servers understand and work with cookies more easily. When a user visits a website, the server sends cookies, which the user's browser saves. When the user comes back to the site, the browser sends these cookies back to the server.

// How cookie-parser Works
// Reads Cookies: When a user sends a request to the server (like when they load a webpage), cookie-parser looks at the cookies sent with the request.
// Makes Cookies Accessible: It takes these cookies and makes them available in an easy-to-use format for the server. You can then use these cookies in your code without having to manually decode them.
// Example in Simple

/*

The **JavaScript Event Loop** and the **Node.js Event Loop** are closely related concepts, but they operate in slightly different environments. Here's a breakdown of both to clarify their similarities and differences:

### 1. **JavaScript Event Loop** (in Browsers)
The **JavaScript Event Loop** is a mechanism in the browser environment (e.g., Chrome, Firefox) that handles asynchronous operations like timers, network requests, DOM events, and other tasks, ensuring JavaScript's non-blocking behavior. 

JavaScript runs on a **single thread**, so the event loop is crucial in making sure asynchronous tasks don't block the main thread while allowing other tasks to execute.

#### How It Works:
1. **Call Stack**: The main execution context. All synchronous code gets pushed onto the call stack and is executed line by line.
2. **Web APIs**: The browser provides APIs for asynchronous tasks like `setTimeout`, `fetch`, DOM events, etc. When these are called, they are offloaded to the browser's background and executed asynchronously.
3. **Task Queue**: Once an asynchronous task is completed (e.g., a network request returns a response), a callback is pushed into the **task queue**.
4. **Event Loop**: The event loop checks whether the call stack is empty. If it's empty, it takes the first task from the task queue and pushes it onto the call stack to execute.

#### Microtasks and Macrotasks:
- **Microtasks** (e.g., Promises, `process.nextTick` in Node.js) are higher priority than **macrotasks** (e.g., `setTimeout`, `setInterval`).
- After every task, the event loop checks for **microtasks** before moving on to macrotasks.

**Example (Browser JavaScript):**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output**:
```
Start
End
Promise
Timeout
```

### 2. **Node.js Event Loop**

In **Node.js**, the event loop is more advanced since it runs not just JavaScript code but also interfaces with the operating system, handling I/O operations. Like the browser, Node.js is **single-threaded** for JavaScript execution, but it uses asynchronous, non-blocking I/O with the help of **libuv** to handle other tasks concurrently.

#### How It Works:
1. **Call Stack**: Same as the browser's event loop; synchronous code runs first.
2. **Node APIs/Libuv**: For I/O tasks like file system operations, networking, timers, and so on, Node.js uses **libuv**, a C library that handles the actual OS-level I/O operations asynchronously in the background.
3. **Callback Queue**: Once the Node APIs (through **libuv**) complete the asynchronous operation, the callback is placed into the callback queue.
4. **Event Loop**: The event loop handles tasks in various **phases** (explained below). Once the call stack is empty, the event loop moves to the appropriate phase, executing tasks in the corresponding callback queue.

#### Node.js Event Loop Phases:
The Node.js event loop is divided into **phases**, and each phase has a specific type of task:
1. **Timers**: Executes callbacks for timers like `setTimeout` and `setInterval`.
2. **Pending Callbacks**: Executes I/O-related callbacks that were deferred.
3. **Idle/Prepare**: Internal phase for system-level tasks.
4. **Poll**: Retrieves new I/O events, executes callbacks related to I/O, and pauses if there’s nothing else to do.
5. **Check**: Executes `setImmediate()` callbacks.
6. **Close Callbacks**: Handles cleanup tasks like `socket.on('close')`.

Additionally, there is a **microtask queue** for promises and `process.nextTick()`. Microtasks are executed at the end of every phase.

**Example (Node.js):**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");
```

**Output (Node.js)**:
```
Start
End
Next Tick
Promise
Immediate
Timeout
```

#### Node.js Event Loop Phases Example:
- **`process.nextTick()`** and Promises are part of the **microtask queue** and get priority over `setImmediate()` or `setTimeout()`.
- `setImmediate()` is handled in the **check** phase, which happens after the **poll** phase.
- `setTimeout()` is handled in the **timers** phase, which happens first in the event loop after microtasks.

---

### **When to Use Each Event Loop**

- **JavaScript Event Loop (Browser)**: The browser environment is focused on rendering, user interactions, and handling I/O (like XHR requests), with asynchronous tasks being crucial for responsiveness.
  
- **Node.js Event Loop**: Node.js is focused on handling server-side I/O efficiently, especially in the context of web servers, networking, and file operations. It can manage a huge number of I/O operations concurrently without blocking, thanks to the event loop phases and asynchronous nature.

### Summary:

- **JavaScript Event Loop** (Browser): Handles asynchronous operations like network requests, DOM events, and timers.
- **Node.js Event Loop**: Handles I/O-bound tasks (file I/O, networking) and more complex asynchronous operations with a phase-driven event loop.

*/
