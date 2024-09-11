// https://blog.algomaster.io/p/rate-limiting-algorithms-explained-with-code
// https://blog.algomaster.io/p/message-queues
// node interview question
//https://codewithpawan.medium.com/node-js-interview-preparation-guide-from-beginners-to-advanced-part-1-8bd78ee8f6f4

// Node.js, Apache, and Nginx are widely used for handling server requests, but they do so in very different ways. Let’s compare Node.js (single-threaded) with Apache and Nginx (multi-threaded) in terms of how they manage concurrent requests.

// 1. Node.js: Single-Threaded, Event-Driven Architecture
// Node.js is known for being single-threaded, but it achieves high concurrency through an event-driven, non-blocking I/O model. Here's how it works:

// Key Concepts in Node.js:
// Single Thread: In Node.js, there is a single thread responsible for running JavaScript code, which means it can handle only one operation at a time on this main thread.
// Event Loop: Instead of creating multiple threads for handling requests, Node.js uses the event loop to manage asynchronous tasks. When an I/O-bound task (e.g., file read, database query, network request) is encountered, Node.js offloads that task to the libuv library, which handles the I/O asynchronously.
// While the I/O task is handled in the background, Node.js continues to execute other requests.
// Once the I/O task is completed, the callback for that task is pushed to the callback queue and processed by the event loop when the call stack is free.
// Non-Blocking I/O: Node.js excels at I/O-bound tasks because they are handled without blocking the main thread.
// Example:
// When a Node.js server receives a request, the single thread quickly processes the initial part of the request. If the request involves database operations, reading files, or network communication, Node.js offloads those tasks to the background and continues handling other requests.

// Advantages of Node.js:

// Highly efficient for I/O-bound operations (e.g., real-time applications, chat apps, streaming services).
// Handles thousands of concurrent connections with minimal overhead.
// Ideal for applications where the focus is on handling a high volume of requests without heavy CPU-bound operations.
// Limitations of Node.js:

// Less suitable for CPU-bound tasks like data processing, large computations, and image processing, as a single thread handles all the tasks. These types of tasks can block the event loop and degrade performance.
// 2. Apache & Nginx: Multi-Threaded or Multi-Process Architecture
// Both Apache and Nginx use multi-threaded or multi-process architectures to handle multiple requests. However, the way they implement this differs.

// Apache: Process-Per-Request or Thread-Per-Request Model
// Apache can use different multi-threading models, such as pre-fork (process-per-request) or worker (thread-per-request).
// In pre-fork mode, Apache creates a separate process for each incoming request. Each process runs independently and handles one request at a time.
// In worker mode, Apache spawns multiple threads within a process, and each thread handles one request.
// This means Apache can handle multiple requests concurrently, either by creating new processes or threads for each connection.
// Advantages of Apache:

// Isolated processes/threads ensure stability and reliability, as one thread or process failure does not crash the entire server.
// Suitable for applications where thread or process isolation is important (e.g., hosting multiple websites on the same server).
// Limitations of Apache:

// Creating new processes or threads for each request is resource-intensive. It uses more memory and CPU, especially for high-concurrency environments.
// Not as efficient for handling large numbers of simultaneous connections as event-driven architectures like Node.js.
// Nginx: Event-Driven, Asynchronous Model (with Worker Processes)
// While Nginx is often considered multi-threaded, it actually follows an event-driven, asynchronous model similar to Node.js but with a more efficient multi-process approach.
// Nginx runs a limited number of worker processes (typically one per CPU core). Each worker process is capable of handling thousands of concurrent connections using a single thread per worker.
// Like Node.js, Nginx employs non-blocking I/O with an event loop. However, instead of a single-threaded event loop like Node.js, Nginx has multiple worker processes, each running its own event loop.
// Advantages of Nginx:

// Extremely efficient at handling static content and high-concurrency environments (e.g., serving thousands of static files, acting as a reverse proxy).
// Low resource consumption compared to Apache due to the limited number of worker processes.
// Limitations of Nginx:

// Nginx is optimized for I/O-bound tasks (similar to Node.js) and less effective for CPU-bound tasks.
// Less flexibility for dynamic content (which is why it’s often paired with another server like Node.js, PHP-FPM, or Python's WSGI).Node.js, Apache, and Nginx are widely used for handling server requests, but they do so in very different ways. Let’s compare Node.js (single-threaded) with Apache and Nginx (multi-threaded) in terms of how they manage concurrent requests.

// 1. Node.js: Single-Threaded, Event-Driven Architecture
// Node.js is known for being single-threaded, but it achieves high concurrency through an event-driven, non-blocking I/O model. Here's how it works:

// Key Concepts in Node.js:
// Single Thread: In Node.js, there is a single thread responsible for running JavaScript code, which means it can handle only one operation at a time on this main thread.
// Event Loop: Instead of creating multiple threads for handling requests, Node.js uses the event loop to manage asynchronous tasks. When an I/O-bound task (e.g., file read, database query, network request) is encountered, Node.js offloads that task to the libuv library, which handles the I/O asynchronously.
// While the I/O task is handled in the background, Node.js continues to execute other requests.
// Once the I/O task is completed, the callback for that task is pushed to the callback queue and processed by the event loop when the call stack is free.
// Non-Blocking I/O: Node.js excels at I/O-bound tasks because they are handled without blocking the main thread.
// Example:
// When a Node.js server receives a request, the single thread quickly processes the initial part of the request. If the request involves database operations, reading files, or network communication, Node.js offloads those tasks to the background and continues handling other requests.

// Advantages of Node.js:

// Highly efficient for I/O-bound operations (e.g., real-time applications, chat apps, streaming services).
// Handles thousands of concurrent connections with minimal overhead.
// Ideal for applications where the focus is on handling a high volume of requests without heavy CPU-bound operations.
// Limitations of Node.js:

// Less suitable for CPU-bound tasks like data processing, large computations, and image processing, as a single thread handles all the tasks. These types of tasks can block the event loop and degrade performance.
// 2. Apache & Nginx: Multi-Threaded or Multi-Process Architecture
// Both Apache and Nginx use multi-threaded or multi-process architectures to handle multiple requests. However, the way they implement this differs.

// Apache: Process-Per-Request or Thread-Per-Request Model
// Apache can use different multi-threading models, such as pre-fork (process-per-request) or worker (thread-per-request).
// In pre-fork mode, Apache creates a separate process for each incoming request. Each process runs independently and handles one request at a time.
// In worker mode, Apache spawns multiple threads within a process, and each thread handles one request.
// This means Apache can handle multiple requests concurrently, either by creating new processes or threads for each connection.
// Advantages of Apache:

// Isolated processes/threads ensure stability and reliability, as one thread or process failure does not crash the entire server.
// Suitable for applications where thread or process isolation is important (e.g., hosting multiple websites on the same server).
// Limitations of Apache:

// Creating new processes or threads for each request is resource-intensive. It uses more memory and CPU, especially for high-concurrency environments.
// Not as efficient for handling large numbers of simultaneous connections as event-driven architectures like Node.js.
// Nginx: Event-Driven, Asynchronous Model (with Worker Processes)
// While Nginx is often considered multi-threaded, it actually follows an event-driven, asynchronous model similar to Node.js but with a more efficient multi-process approach.
// Nginx runs a limited number of worker processes (typically one per CPU core). Each worker process is capable of handling thousands of concurrent connections using a single thread per worker.
// Like Node.js, Nginx employs non-blocking I/O with an event loop. However, instead of a single-threaded event loop like Node.js, Nginx has multiple worker processes, each running its own event loop.
// Advantages of Nginx:

// Extremely efficient at handling static content and high-concurrency environments (e.g., serving thousands of static files, acting as a reverse proxy).
// Low resource consumption compared to Apache due to the limited number of worker processes.
// Limitations of Nginx:

// Nginx is optimized for I/O-bound tasks (similar to Node.js) and less effective for CPU-bound tasks.
// Less flexibility for dynamic content (which is why it’s often paired with another server like Node.js, PHP-FPM, or Python's WSGI).
