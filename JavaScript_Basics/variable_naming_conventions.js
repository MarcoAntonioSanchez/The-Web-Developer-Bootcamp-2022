// 1st rule: You can use numbers in variable names, but the name
// of the variables you create can't never start with a number.

// let 1user = Marco; // WRONG
let user1 = Marco; // ACCEPTABLE

// 2nd rule: This won't cause an error, but using underscore
// in the beginning of a variable's name it's consider a bad
// practice, so avoid it.

let _userOne = Marco; // WRONG
let user_one = Marco; // ACCEPTABLE

// 3rd rule: Use the cammel notation in variable names, example:

let userOne = Marco; // ACCEPTABLE
let UserTwo = Marco; // NOT RECOMMENDED

// 4th rule: Avoid using letter's only for naming your variables,
// example:

let n = 9;
let i = 0;

// There will be some cases where you may need an index variable,
// just to keep count on something while you code so the best
// practice in this case is to use the letter "i", but outside
// these cases it's not recommended to name values after only
// one letter, instead you can give it a more descriptive name,
// example:

let userNumber = 9;
let customIndex = 0;
