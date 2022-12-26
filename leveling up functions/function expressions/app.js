// Function expressions

// Example of a very simple function adding two variables
function add(x, y) {
  return x + y;
}
add(3, 4); // 7

// Storing a function as value intoa constant
const square = function (num) {
  // Function with no name
  return num * num;
};
square(7); // 49

// Another example of a function expression
const addCopy = function (x, y) {
  return x + y;
};
addCopy(4, 3); // 7
