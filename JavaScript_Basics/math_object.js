// Math object

// Contains properties and methods for mathematical
// constants and functions

Math.PI; // 3.1415926535...

// Rounding a number
Math.round(4.9); // 5

// Absolute value
Math.abs(-456); // 456

// Raises 2 to the 5th power
Math.pow(2, 5); // 32

// Removes decimal
Math.floor(3.9999); // 3

// Rounds up (like Math.round())
Math.ceil(34.99); // 35

// Random numbers
// Math.random() gives us a random decimal between 0 and 1
// (non-inclusive)

Math.random();
// 0.145064252352674

// Random integers
// Let's generate random numbers between 1 and 100

const step1 = Math.random();
// 0.14325465346

const step2 = step1 * 10;
// 5.131454325

const step3 = Math.floor(step2);
// 5

const step4 = step3 + 1;
// 6

Math.floor(Math.random() * 10) + 1;
