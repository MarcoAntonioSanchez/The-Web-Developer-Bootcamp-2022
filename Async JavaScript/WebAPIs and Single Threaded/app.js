// JS IS SINGLE THREADED
// WHAT DOES THAT MEAN?
// At any given point in time, that single JS thread is running at most one line of JS code.

console.log("Sendind request to the server");

// setTimeout is a web API function that will remind JS to run the code after the time we set at the end
setTimeout(() => {
  console.log("Heres is you data from server");
  // 3 seconds in this case
}, 3000);

console.log("3 Seconds later");

// HOW?
// Browsers come with web APIs that are able to handle certain tasks in the background (like making requests or setTimeout).
// The JS call stack recognizes these web API functions and passes from off to the browser to take care of.
// Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.
