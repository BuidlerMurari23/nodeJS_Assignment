// Importing the 'fs' module
const fs = require('fs');

// Information about Node.js architecture
const nodejsArchitectureInfo = `
Node.js Architecture:

1. V8 JavaScript Engine:
   - V8 is a high-performance JavaScript engine developed by Google for Chrome.
   - Node.js uses V8 to execute JavaScript code.

2. Event Loop:
   - The event loop is at the core of Node.js, allowing it to handle non-blocking asynchronous operations.
   - It enables Node.js to execute callbacks, promises, etc., without blocking the main thread.

3. Single-Threaded Model:
   - Node.js operates on a single thread and handles multiple requests asynchronously.
   - This architecture allows for scalable, non-blocking applications.

4. Libuv Library:
   - Libuv is a C library that Node.js uses to handle asynchronous I/O operations.
   - It provides the event loop and other concurrency primitives.

5. Node.js APIs:
   - Node.js has built-in modules like fs (file system), http (server), and others for various functionalities.
   - These modules use the event-driven, non-blocking model for I/O operations.

6. Callback Mechanism:
   - Node.js heavily uses callbacks to handle asynchronous operations, ensuring non-blocking behavior.
`;

// Writing the architecture information to a new file 'nodejs_architecture.txt'
fs.writeFileSync('nodejs_architecture.txt', nodejsArchitectureInfo, 'utf8');

console.log("Node.js architecture information has been written to nodejs_architecture.txt.");




// Importing the 'fs' module
const fsa = require('fs');

// Reading the content of 'nodejs_architecture.txt'
const data = fsa.readFileSync('nodejs_architecture.txt', 'utf8');

// Printing the content to the console
console.log(data);



// Importing the 'fs' module
const fsi = require('fs');

// Additional data to append: Advantages of Node.js
const advantagesOfNodeJs = `
Advantages of Node.js:

1. Non-blocking, Event-Driven Model:
   - Node.js uses a non-blocking I/O model, which helps it handle multiple requests concurrently without waiting for one to complete before moving on to the next.

2. Scalability:
   - Node.js is highly scalable due to its single-threaded, event-driven architecture. It can efficiently handle large numbers of concurrent connections.

3. Fast Execution:
   - Node.js uses Google's V8 engine, which compiles JavaScript directly into machine code, resulting in fast execution of code.

4. Large Ecosystem (NPM):
   - Node.js has a rich ecosystem with a large number of open-source packages available through npm (Node Package Manager), simplifying the development process.

5. Full Stack JavaScript:
   - With Node.js, you can use JavaScript for both client-side and server-side development, making it easier to manage and coordinate development tasks.

6. Real-Time Data Handling:
   - Node.js is well-suited for applications that require real-time data, such as chat applications, live updates, and multiplayer games.
`;

// Appending the advantages to 'nodejs_architecture.txt'
fsi.appendFileSync('nodejs_architecture.txt', advantagesOfNodeJs, 'utf8');

// Reading the updated content of the file
const updatedData = fsi.readFileSync('nodejs_architecture.txt', 'utf8');

// Printing the updated content to the console
console.log(updatedData);

// // Importing the 'fs' module
const fsai = require('fs');

// Deleting the 'nodejs_architecture.txt' file
fsai.unlinkSync('nodejs_architecture.txt');

// Printing success message
console.log("File Deleted Successfully");


// Importing the 'os' module
const os = require('os');

// Getting the OS name
const osName = os.type();

// Getting the OS release version
const osRelease = os.release();

// Printing the OS name and release version to the console
console.log(`Operating System: ${osName}`);
console.log(`OS Release Version: ${osRelease}`);



// Importing the 'http' module
const http = require('http');

// Creating an HTTP server
const server = http.createServer((req, res) => {
  // Set the response content type to 'text/plain'
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Sending the message as the response
  res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

// Set the server to listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



// Importing the 'events' module
const EventEmitter = require('events');

// Creating an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Defining a custom 'subscribe' event
eventEmitter.on('subscribe', () => {
  console.log('A user has subscribed!');
});

// Simulating the trigger of the 'subscribe' event
eventEmitter.emit('subscribe');



// Importing the 'events' module
const EventEmitters = require('events');

// Creating an instance of EventEmitter
const eventEmitters = new EventEmitters();

// Defining an event handler for the 'greet' event
const greetHandler = () => {
  console.log('Hello! The event handler is triggered.');
};

// Attaching the event handler to the 'greet' event
eventEmitters.on('greet', greetHandler);

// Triggering the 'greet' event
console.log('Triggering greet event for the first time:');
eventEmitters.emit('greet');  // Should print the message

// Removing the 'greet' event handler
eventEmitters.removeListener('greet', greetHandler);

// Trying to trigger the 'greet' event after removing the handler
console.log('Triggering greet event after removing the handler:');
eventEmitters.emit('greet');  // No output should occur





// Importing the 'events' module
const EventEmitterss = require('events');

// Creating an instance of EventEmitter
const eventEmitterss = new EventEmitterss();

// Checking the current maximum number of listeners (default is 10)
console.log(`Current max listeners: ${eventEmitter.getMaxListeners()}`);

// Setting the maximum number of listeners to 5
eventEmitterss.setMaxListeners(5);
console.log(`Max listeners set to: ${eventEmitterss.getMaxListeners()}`);

// Adding more than 5 listeners to the 'greet' event
for (let i = 1; i <= 6; i++) {
  eventEmitterss.on('greet', () => {
    console.log(`Hello from listener ${i}`);
  });
}

// Triggering the 'greet' event to see the output
console.log('Triggering greet event:');
eventEmitterss.emit('greet');  // Should trigger all 6 listeners, even though we set max listeners to 5
