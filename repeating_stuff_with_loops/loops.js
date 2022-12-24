// Loops

// Loops allow us to repeat code
// - "Print hello" 10 times.
// - Sum all numbers in an array.

// There are multiple types:
// - for loop
// - while loop
// - for...of loop
// - for...in loop

// For loop sytax:
// for (
//     [initialExpression];
//     [condition];
//     [incrementExpression]
// )

// Our first for loop
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

// The equivalent printing out every number without a for loop:
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

for (
  let i = 1; // i for index starting off at 1, initial expression
  i <= 9; // if i (1) is less than or equal to 9, condition is true the loop keeps going
  i++
) {
  // add 1 or: variable++, repeat the loop
  console.log(i); // printing out in console the number from 1 to 9
}
