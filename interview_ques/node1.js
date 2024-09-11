// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

//aggregation are operations that combine multiple piece of data to produce single result
//they are used to summarize large sets of data,giving us useful insights without having to look at every individual piece of info

//studentScores

// {
//     "studentId":1,
//     "name":"Alice",
//     "scroes":[85,90,93,96,40]
// }

// $unwind is used to deconstruct the scores array.
// $group is used to group documents by a specified expression.
// $sum, $avg, $max, $min are aggregation operators.
// $match is used for filtering documents.
// $count is used for counting documents.

//why use cors package ,what does it do
// cors->cross origin resource sharing
//it is used to enable cross origin resource sharing in web development
//it is mechanism implemented by web browers to control access to resources like apis on differnet domain than the one serving the web page

// Why use 'cors'?
// It allows you to make your server accessible to web pages from different domains. Without it,browsers would block requests from a webpage to your API if they're not on the same domain.

// What does it do?
// The 'cors' package adds the necessary headers to your server's responses, telling the browser it's okay to allow requests from different origins (domains).

// enable cors for all routes
// app.use(cors());

//for specific domain
// const corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200
//   };

//   app.use(cors(corsOptions));

// app.options("*", cors({ origin: "*", optionsSuccessStatus: 200 }));

// Key Differences:
// app.use() is for middleware and affects all HTTP methods.
// app.get() is for handling GET requests on a specific route.
// app.options() is specifically for handling OPTIONS requests, often used with CORS.

// When to use each:
// Use app.use() for applying middleware that should run
// for multiple routes or all routes.
// Use app.get() (or app.post(), app.put(), etc.) when you want
//  to handle specific HTTP methods on specific routes.
// Use app.options() when you need to handle OPTIONS requests,
//  typically for CORS configuration.

// what is libuv
// **libuv** is a library used by **Node.js** to handle asynchronous (non-blocking) operations efficiently. It acts as a backbone for managing input/output (I/O) tasks like reading files, making network requests, or handling timers in a way that doesn't block the main thread.

// Here's a simplified explanation of **libuv**:

// ### Key Concepts:

// 1. **Asynchronous I/O**:
//    - Normally, when you perform tasks like reading a file or making a network request, it takes time. If you wait for each task to finish before starting the next one, the program becomes slow.
//    - **libuv** helps you start these tasks and move on to other tasks immediately, letting you perform multiple operations at once. Once a task is done, it will notify you.

// 2. **Event Loop**:
//    - **libuv** is built around an **event loop**. This loop continuously checks if there are any tasks that have been completed (like a file being read), and when they are, it executes the corresponding callback function.
//    - Think of it as a to-do list: it keeps track of tasks, checks their status, and executes the appropriate code when each task is done.

// 3. **Cross-Platform Support**:
//    - **libuv** works on multiple operating systems like Windows, macOS, and Linux, meaning it handles low-level system tasks (like file handling or networking) in a platform-independent way.

// 4. **Handles and Requests**:
//    - **libuv** uses two important concepts:
//      - **Handles**: Represent things like network connections or file descriptors.
//      - **Requests**: Represent operations you want to perform on these handles, such as reading from a file or writing to a socket.

// ### Example in Node.js:
// When you use **Node.js** to read a file asynchronously, **libuv** is the part of Node.js that manages the file reading process behind the scenes.

// ```javascript
// const fs = require('fs');

// // Asynchronous file reading using libuv behind the scenes
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// ```

// In this example:
// - `fs.readFile` starts an asynchronous file read.
// - **libuv** handles the actual file read operation in the background.
// - Once the file read is complete, **libuv** will notify the event loop, and the callback function (which prints the file contents) is executed.

// ### Why is libuv important?
// - **Efficient Multitasking**: It allows Node.js to handle many operations at once without blocking the main thread, making Node.js highly performant.
// - **Cross-Platform**: It abstracts away OS-specific details, so Node.js code runs the same on different platforms.

// In short, **libuv** makes sure that Node.js can do multiple things simultaneously (like reading files, handling HTTP requests, or interacting with the database) without slowing down.

// Node.js is called single-threaded because it executes JavaScript code on one thread.
// It can still handle many I/O operations (like file reads, HTTP requests) in the background using libuv and the event loop, making it efficient at multitasking without needing multiple threads for JavaScript execution.

//golang vs node.js

// 1. Concurrency Model:
// Golang:
// Uses goroutines for concurrency, which are lightweight and managed by Go's runtime.
// Goroutines are extremely efficient (a program can run thousands of them with minimal memory overhead).
// Go uses a multiprocessing model with built-in concurrency, making it ideal for CPU-bound and concurrent operations.
// Node.js:
// Uses an event-driven, non-blocking I/O model with a single-threaded JavaScript runtime.
// It relies on asynchronous programming to handle multiple tasks concurrently, via the event loop and callbacks, promises, and async/await.
// Node.js is ideal for I/O-bound tasks like network operations, file handling, and API servers.
// Which is Better:
// Golang: For high-concurrency applications that require efficient CPU usage, like real-time systems, high-performance web servers, and concurrent processing tasks.
// Node.js: For I/O-bound applications with many simultaneous connections, like APIs, chat servers, or real-time collaborative applications (e.g., Slack, Trello).
// 2. Performance:
// Golang:
// Go is a compiled language, which means it is faster because it translates code into machine code directly.
// Go has better performance for CPU-intensive tasks, low-latency, and real-time systems.
// Node.js:
// Node.js is an interpreted language (JavaScript running on V8). Its non-blocking I/O model makes it great for handling lots of connections.
// However, for CPU-intensive tasks (like image processing or data manipulation), Node.js can slow down, as JavaScript is single-threaded.
// Which is Better:
// Golang: For performance-critical applications, especially for CPU-bound tasks and high-throughput systems like media streaming, real-time data processing, and computational tasks.
// Node.js: For building fast, scalable I/O-bound applications where the focus is on managing large numbers of requests (e.g., microservices, API servers, etc.).

// cross platform support
// The child_process module in Node.js provides the ability to spawn child processes to run system commands, other scripts, or external applications from within a Node.js application. It allows for running multiple processes concurrently and interacting with them.

// There are four primary ways to create child processes:
// spawn(): Spawns a new process using a given command. This is useful for running long-running processes.
// exec(): Executes a command in a shell and buffers the output. This is more suitable for small tasks.
// execFile(): Similar to exec(), but directly executes the file without a shell.
// fork(): Spawns a new Node.js process and allows for IPC (Inter-Process Communication). This is mainly used for running another Node.js script in a child process.

//  EventEmitter:
// The EventEmitter is a core module in Node.js that allows you to create and handle custom events in an asynchronous, event-driven manner. It’s widely used for handling events in Node.js.
// A typical use case for the EventEmitter is to notify when certain events happen (e.g., when a file is opened, or when data is available).

// Example:
// js
// Copy code
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// // Register an event listener
// eventEmitter.on('sayHello', (name) => {
//   console.log(`Hello, ${name}!`);
// });

// // Emit the event
// eventEmitter.emit('sayHello', 'Prakash');
