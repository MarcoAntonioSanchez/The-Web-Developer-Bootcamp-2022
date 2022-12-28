// Capitalize Exercise
// Define a function called capitalize that accepts a string
// argument and returns a new string with the first letter
// capitalized (but the rest of the string unchanged).

// For example:

// Answer:
function capitalize(str) {
  let firstLetter = str.slice(0, 1).toUpperCase();
  let restStr = str.slice(1);
  return firstLetter + restStr;
}
