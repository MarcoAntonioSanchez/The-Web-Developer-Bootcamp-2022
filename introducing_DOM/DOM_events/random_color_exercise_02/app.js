// Selecting and saving the button and h1 elements into variables
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

// Adding en event listener over the button into the HTML template
button.addEventListener("click", function () {
  // Create a new variable with the make a random color function
  const newColor = makeRandColor();
  // Updating the background-color property from the body to the new generated color
  document.body.style.backgroundColor = newColor;
  // Updatint the innerText attribute from the h1 element, to the new generated color
  h1.innerText = newColor;
});

// Initializing and saving an arrow function to a variable
const makeRandColor = () => {
  // Create and save a randomly generated number into a variable (RGB)
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  // Return the rgb text with the random generated numbers
  return `rgb(${r}, ${g}, ${b})`;
};
