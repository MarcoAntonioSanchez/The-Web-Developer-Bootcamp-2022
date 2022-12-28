// Returning functions

// Basic function that returns a message bassed on a random
// generated number with a decimal condition on it
function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("Congrats i am a good function");
    };
  } else {
    return function () {
      alert("I am the bad function");
    };
  }
}
// This way you are just calling the main function but not
// capture it for later use
makeMysteryFunc();

// If you define a variable and store the pevious function
// as a value, then you are saving it for later use
const mystery = makeMysteryFunc();

// Now you can execute the function by variabel's name
// And / or use it later
mystery();

// Function that accepts two parameters
function makeBetweenFunc(min, max) {
  return function (num) {
    // another function is returned
    return num >= min && num <= max; // nested function returns
    // a comprobation of a parameter, between min and max
  };
}

// We save the main function into a constant isChild
const isChild = makeBetweenFunc(0, 18); // min and max parameters passed
isChild(40); // false
isChild(10); // true

// You can use the same function "factory" with different
// variables / constants, for separate parameters
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

isSenior(67); // true
isAdult(20); // true
