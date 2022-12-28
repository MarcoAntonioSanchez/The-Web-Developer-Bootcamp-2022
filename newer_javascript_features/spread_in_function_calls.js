// Spread in function calls

// Spread syntax allow an iterable such as an array to be
// expanded in places where zero or more arguments
// (for function calls) are expected, or an object expression
// to be expanded in places where zero ro more key-value pairs
// (for object literals) are expected.

// For function calls

// Expands an iterable (array, string, etc.)
// into a list or arguments

const nums = [9, 3, 2, 8];

// Find the max number using spread
Math.max(nums); // NaN

// Use spread instead:
Math.max(...nums); // 9
// Same as calling: Math.max(9,3,2,8)

// Find the min number using spread
Math.min(...nums); // 2

const numsCopy = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
Math.max(numsCopy); // NaN
Math.max(...numsCopy); // 53456
Math.min(...numsCopy); // 1

// It also works with console.log over strings
// Converting each char. into a separate argument
console.log("Hello"); // "Hello"
console.log(..."Hello"); // H e l l o
