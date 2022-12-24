// Or (||)
// If one side os true, the entire thing is true

let age = 76;

if (age < 6 || age >= 65) {
  console.log("You get in for free!");
} else {
  console.log("That will be $10 please");
}

// Only one side needs to be true

1 != 1 || 10 === 10; // true
10 / 2 === 5 || null; // true
0 || undefined; // false

// You can have two operator working together

const tempAge = 90;
if ((tempAge >= 0 && tempAge < 5) || tempAge >= 65) {
  console.log("Free");
} else if (tempAge >= 5 && tempAge < 10) {
  console.log("Pay $10");
} else if (tempAge >= 10 && tempAge < 65) {
  console.log("Pay $20");
}
