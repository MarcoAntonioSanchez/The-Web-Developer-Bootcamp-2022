// setTimeout() and setInterval()

// Setting a timeout example of one print
console.log("Hello...");
setTimeout(() => {
  console.log("... are you still there");
}, 3000);

console.log("Goodbye");

// Setting a interval with iterable printing
// Assignining the id const name to setInterval will print out
// the corresponding "id" of that pront round
const id = setInterval(() => {
  console.log(Math.random());
}, 3000);
