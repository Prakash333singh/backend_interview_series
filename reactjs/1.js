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
