// The break keyword

// You can make use of the break keyword when you don't know
// how many time will loop something
let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
  guess = Math.floor(Math.random() * 10);
  if (guess === targetNum) {
    console.log(`Correct: Guessed: ${guess} & target was: ${targetNum}`);
    break;
  } else {
    console.log(`Guessed ${guess}...Incorrect!`);
  }
}

// You can stop or break the while loop within a word, with help
// of the prompt so the user can stop it at any time with an input
let input = prompt("Hey, say something:");
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === "stop copying me") {
    break;
  }
}
console.log("Ok you win");

// In this case you know how many times will loop this for loop
// But let's imagine we don't know, you can break the loop at some
// point where you can figure if it will end soon:
for (let i = 0; i < 1000; i++) {
  console.log(i);
  if (i === 100) break;
}
