// Logical operators
// Combining expressions

// AND (&&)
// Both sides must be true, for the entire thing to be true

1 <= 4 && "a" === "a"; // true
9 > 10 && 9 >= 9; // false
"abc".length === 3 && 1 + 1 === 4; // false

true && true; // true
true & false; // false
false && false; // false
false && true; // false

const password = prompt("Enter you password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Valid password");
} else {
  console.log("Incorret password format");
}
