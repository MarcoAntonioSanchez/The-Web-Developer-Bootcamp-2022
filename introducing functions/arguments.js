// Inputs
// Right now, our simple functions accept zero inputs.
// They behave the same way every time.

// Simple greet function
function greet() {
  console.log("Hey!");
}

// We've seen this before
// No imputs
"hello".toUpperCase();

// Arguments
"hello".indexOf("h");

// Greet function take 2
function greetings(person) {
  console.log(`Hi, ${person}!`);
}

greetings("Marco");
greetings("Raven");

// Another example
function otherGreet(firstName) {
  console.log(`Hey there, ${firstName}`);
}

otherGreet("Name"); // String as parameter "Name"
// Hey there, Name
