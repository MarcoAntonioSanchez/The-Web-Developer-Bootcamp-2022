// Selecting and saving the elements to work woth into variables
const button = document.querySelector("#colorButton");
const container = document.querySelector("#container");

// Adding a click event listener to the button element
button.addEventListener("click", function (e) {
  // Changing the background color with a random generated one
  container.style.backgroundColor = makeRandColor();
  // Stoping the propagation of the function, the event bubbling
  e.stopPropagation();
});

// Adding a second click event listener to the parent container of the button
// So it hides it self and the button on click, event bubbling again
container.addEventListener("click", function () {
  // Adding the hide class on click event
  container.classList.add("hide");
});

// Saving the make a random color function into a variable
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
