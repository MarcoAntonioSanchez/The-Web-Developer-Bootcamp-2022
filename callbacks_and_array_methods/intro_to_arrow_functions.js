// Intro to arrow functions
// Internet Explorer NOT supported

// Syntactically compact alternative
// to a regular function expression

// Example A
const square = (x) => {
  return x * x;
};

// Example B
const sum = (x, y) => {
  return x + y;
};

// Example C
// This one is the same as example's before
const add = function (x, y) {
  return x + y;
};

// Example D
// And this one is the same as before, too
function addCopy(x, y) {
  return x + y;
}

// Back to example B - copy
const anotherAdd = (x, y) => {
  return x + y;
};

// Back to example A - copy
const squareCopy = (x) => {
  return x * x;
};

// It could be done with no parentheses too, but this only
// works when there's one parameter involved, more than one
// parameter and will five an error
const anotherSquare = (num) => {
  return num * num;
};

// Let's rey a roll die with no parameters
// Same with no parameter cases, it need the parentheses to work
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};
