// Default parameters

// The onld way
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(7); // 7
multiply(7, 3); // 21

// Return implicit version
function rollDie(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}
rollDie();
// NaN

// If version
function rollDie(numSides) {
  if (numSides === undefined) {
    numSides = 6;
  }
  return Math.floor(Math.random() * numSides) + 1;
}
rollDie();
// 6
rollDie(20);
// 15

// Return implicit version, plus if version but
// without using an if condition
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

// Simple greet function that recieves a message and the name
// of a person just tu return it in a string
function greet(msg, person) {
  return `${msg}, ${person}!`;
}
greet("Hello", "Raven");
// Output: "Hello Raven"

// Same simple greet function but with a default message
// set as value, in case no message where passed
function greet(msg = "Hey there", person) {
  return `${msg}, ${person}!`;
}
greet("Hello", "Raven");
// Output: "Raven undefined"

// This won't work because the default parameter's value is
// located in first place, so when no first parameter is passed
// the second place parameter will take it's place

// Tip: always save your default parameters for the last place,
// or just don't set it in the 1st place, never

// Changing msg and person parameter's order
function greet(person, msg = "Hey there") {
  return `${msg}, ${person}!`;
}
greet("Raven");
// Output: "Hey there Raven"

// Adding a third parameter with a default value
function greet(person, msg = "Hey there,", punc = "!") {
  return `${msg}, ${person}${punc}`;
}
greet("Marco");
// Output: "Hey there, Marco!"
