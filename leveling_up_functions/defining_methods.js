// Defining mehthods
// We can add functions as properties on objects, we call them methods.

// You can store a function from a value's property in objects
const math = {
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    x * x;
  },
};

// Accessing functions beneath object value's, along other values
const myMath = {
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};
myMath.square(3); // 9
myMath.square["square"](3); // 9, same as before but odd

myMath.PI(); // 3.14159;
myMath.cube(3); // 36, recommended way
myMath.cube["cube"](3); // 36, not very common

// Methods are just functions defined as object porperties

// Their work without the keyword function but we still need
// the commas as we are in an object
const anotherMath = {
    PI: 3.14159,
    square(num) {
      return num * num;
    },
    cube(num) {
      return num ** 3;
    },
  };
