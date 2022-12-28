// Rest
// It looks like spread but it's not

// The arguments object
// - Available inside every function.
// - It's an array-like object
// -     Has a length property
// -     Does not have array methods like push/pop
// - Contains all the arguments passed to the function
// - Not available inside of arrow functions.

function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
sumAll(8, 4, 3, 2); // 17
sumAll(2, 3); // 15

function sum() {
  console.log(arguments);
}
sum();
// Output: Arguments[key: value, key: value, key: value]
sum(2, 3, 4);
// Output: Arguments[0: 2, 1: 3, 2: 4, key: value, key: value, etc...]

// The arguments keyword makes reference to an array-like object
// but it doesn't behave and it's nothing like an actual array
// so when we try to use it like this:

function sumCopy() {
  return arguments.reduce((total, el) => total + el);
}
sumCopy(2, 4, 8, 16);
// Output: Error arguments.reduce() it's not a function
// We'll receive an error ponting .reduce() it's not a function

// Rest params
// Collects all remaining arguments into an actual array
// Three dots before the parameter while declaring the function
// collecting the REST of the values
function sumAllCopy(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}
sumAllCopy(1, 2); // 3
sumAllCopy(1, 2, 3, 4, 5); // 15

// Simple function that will print the first string passed as gold medal
// the second string passed as silver medal
// and the REST of the strings will be added too into everyoneElse
function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold medal goes to: ${gold}`);
  console.log(`Silver medal goes to: ${silver}`);
  console.log(`And thanks to: ${everyoneElse}`);
}
raceResults("Tammy", "Todd", "Tina", "Travis", "Trevor");
// Output: Gold medal goes to: Tammy
// Output: Silver medal goes to: Todd
// Output: And thanks to: Tina, Travis, Trevor
