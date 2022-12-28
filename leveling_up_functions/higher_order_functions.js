// Higher irder functions

// Functions that operate on/with other functions.
// They can:
// - Accept other functions as arguments.
// - Return a function.

let greets = function () {
  console.log("Hi!");
};
greets(); // "Hi!"

// Functions as aruments

function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("HAHAHAHAH");
}
// The parameter is called after the 2nd function, so
// when it gets passed by the parameter name matches the
// function's name
callTwice(laugh); // Pass a function as an argument
// HAHAHAHAHAHA
// HAHAHAHAHAHA
