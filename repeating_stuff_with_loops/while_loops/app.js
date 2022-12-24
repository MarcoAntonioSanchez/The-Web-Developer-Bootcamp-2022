// While loops

// While loops continue running as long as the test condition
// is true
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}

// While loops are useful when you have somethign truly variable
// and you don't know how many times iterates
let count = 0;
while (count < 10) {
  count++;
  console.log(count);
}

while (!gameOver) {
  // Player 1 move
  // Player 2 move
}

// Another example with a secret word on prompts until get it correctly
const secret = "BabyHipopo";
let guess = prompt("Enter the secret password");
while (guess !== secret) {
  guess = prompt("TRY AGAIN...");
}
console.log("ongrats! you get the secret");

// As w don't know how many times will take the user to get
// the secret password, we can use a while loop to keep asking
// with a prompt, until it get's it right.
