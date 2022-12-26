// Block scope

let radius = 8;
if (radius > 0) {
  const PI = 3.14156;
  let msg = "Hi!";
}

consolelog(radius);
console.log(PI); // Not defined
console.log(msg); // It's also scoped into the conditional

for (let i = 0; i < 5; i++) {
  let msg = "HA - HA";
  console.log(msg); // Inside the loop get's printed out
}
console.log(msg); // But outside the scoped (blocked) doesn't exist

for (let i = 0; i < 5; i++) {
  var msgTwo = "HA - HA"; // Declaring the variable as var,
  // make it not-scoped or ublocked
}
console.log(msgTwo); // Accessing the variable inside,
// from outside the loop

// If you use let or const the variables get scoped into their
// function, conditionals, loops, etc...

// Block Scope

let radiusCopy = 8;
if (radiusCopy > 0) {
  const PI = 3.14;
  let circ = 2 * PI * radiusCopy;
}
console.log(radius); // 8
console.log(PI); // Not defined
console.log(circ); // Not defined
// PI and circ are scoped to the BLOCK
