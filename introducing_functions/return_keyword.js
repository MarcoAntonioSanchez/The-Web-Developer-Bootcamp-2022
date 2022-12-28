// The return keyword
// Built-in methods return values when we call them.

// We can store those values:
const yell = "I will end you".toUpperCase();
yell; // "I will end you"

const idx = ["a", "b", "c"].indexOf("c");
idx; // 2

// No return
// Our functions print values out, but do not return anything

// function add(x, y) {
//     console.log(x + y):
// }

// const sum = add(10, 16);
// sum; // undefined

// First return
// Now we can capture a return value in a variable
function add(x, y) {
  return x + y; // Return!
}

const sum = add(10, 16);
sum; // 26

const answer = add(100, 200);
answer; // 300

// With return we can export a value out of a function.
// Everything else after the return keyword, won't run.

function add(x, y) {
  // Check types, if any of both are not a number return false
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
  console.log("This will never be printed, because of the return before");
}

// We are telling that the first value will be trated for the
// function so it will complete 2 parameters to pass to the
// function so it can trate the parameters as is supossed to
add(add(5, 1), 9);
