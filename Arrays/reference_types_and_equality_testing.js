// Reference types and equality testing

"hi" === "hi";
// true

["hi", "bye"] === ["hi", "bye"];
// false

// When you are working with arrays, JavaScript doesn't care about
// the content in the arrays when you compare them

// Instead of making a relation out a every value contained
// in the array with the variable's name, it just makes a
// reference for all of them (the array)
let lukyNums = [3, 7, 55];

let nums = [1, 2, 3];
let numsCopy = nums;

// As JavaScript is referencing to the same value(s),
// once the first variable is updated, the second variable that
// references to the 1st one keeps the update.
nums.push(4);
nums;
// 1, 2, 3, 4

numsCopy;
// 1, 2, 3, 4

// Giving us the "true" value when compare the two different variables

nums === numsCopy;
// true
