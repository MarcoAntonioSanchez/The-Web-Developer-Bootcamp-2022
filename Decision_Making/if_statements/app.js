// Conditionals
// Making deicisons with code

// If statement
// Only runs code if given condition is true

let rating = 3;

if (rating === 3) {
  console.log("You are a superstar!");
}

if (1 + 1 === 2) {
  console.log("Math still works!");
}

// If the conditional results not beign true, only the code inside
// the if statement it's not run, everything else keeps running
console.log("Before conditional");
if (1 + 2 === 2) {
  console.log("Inside conditional");
}
console.log("After conditional");

let random = Math.random();
if (random < 0.5) {
  console.log("Your number is less than 0.5");
  console.log(random);
}
