// Let's make a game where the user needs to guess a number
// until it hits the right one so the game ends.

// Ask a user to enter their maximum number
// You can use parseInt to check if the input is a number or not
let maximum = parseInt(prompt("Enter the maximum number!"));

// You can make sure that the user's input is a number by using
// a while loop to parseInt the type and then re-prompt if this
// parseInt results to be not-to (!), for example:
while (!maximum) {
  maximum = parseInt(prompt("Please enter a valid number"));
}

// We generate a random decimal, then multiply it by the maximum
// number input from the user and added 1 at the end.
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum); // Print out in console the targetNum result of the equation

let guess = parseInt(prompt("Enter your 1st guess"));
// You can create a variable to keep counting the number of attempts while guessing
let attempts = 1;

// While the guess number is not equal to the targetNum generated randomly
while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++; // One attempt is added
  if (guess > targetNum) {
    // If the guess numnber is greater than the randomly generated number
    guess = prompt("Too high. enter a new guess..."); // Then prompt a too high message
  } else {
    // For everything else
    guess = prompt("Too low, enter a new fuess..."); // Then prompt a too low message
  }
}
// You quit?
// Then you will get a message letting you know, that we know...
if (guess === "q") {
  console.log("Ok you can quit for now...");
} else {
  // You gase the targetNumber?
  // Then you get to know how many attempts it tooked you
  console.log(`You got it! It took you #${attempts} guesses`);
}
