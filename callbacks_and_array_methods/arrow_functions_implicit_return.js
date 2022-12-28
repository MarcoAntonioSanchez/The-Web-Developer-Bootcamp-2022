// Arrow functions implicit returns
// All these functions do the same thing:

// Arrow function with parens around param
const isEven = function (num) {
  return num % 2 === 0;
};

// No parens around param
const isEvenTwo = (num) => {
  return num % 2 === 0;
};

// Implicit return
const isEvenThree = (num) => {
  return num % 2 === 0;
};

// You can return the result of a function without inplicitly
// write the keyword return, for example:

// One line implicit return
const isEvenFour = (num) => num % 2 === 0;

// Implicit return with new syntax - only one element to return
const rollDie = () => Math.floor(Math.random() * 6) + 1;

// Another implicit return with no parens around arguments
const add = (a, b) => a + b;

// Careful, these ones may not run as expected with, yes,
// some functions, so don't try to hard it on every implementation
