// Declaring an arrow function into a variable
const makeRandColor = () => {
  // Creating and saving a randomly generated number up to 255, into variables (RGB)
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  // Returning the r, g, b, randomly generated numbers
  return `rgb(${r}, ${g}, ${b})`;
};

// Selecting and saving all the buttons on the HTML template, into a variable
const buttons = document.querySelectorAll("button");
// A for loop to add the event listener to all buttons, with the colorize function pre-defined
for (let button of buttons) {
  button.addEventListener("click", colorize);
}

// Selecting and saving all the h1s on the HTML template, into a variable
const h1s = document.querySelectorAll("h1");
// A for loop to add the event listener to all h1s, with the colorize function pre-defined
for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}

// Initializing the colorize function
function colorize() {
  // Updating the background-color attribute for a random RGB generated color
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
  // Using this, instead of each HTML tag / element, optimize's the code and allows to separate the
  // functions into a similar structure like the one used in this example.
}
