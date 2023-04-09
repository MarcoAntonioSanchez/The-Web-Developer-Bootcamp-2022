// 100 Button Insanity Exercise
// Without touching index.html, please use JavaScript to create exactly 100 new button elements! Add each new button inside the container element provided in index.html.  Unfortunately, Udemy's exercise tool does not support to the append method, so you will need to use appendChild.  Here are the steps:

// - Create exactly 100 new button elements
// - Each button must have some text inside of it (it doesn't matter what)
// - Each button must be appended inside the container div.

// YOUR CODE GOES HERE:
const divContainer = document.getElementById("container");
for (let i = 0; i < 100; i++) {
  let newButton = document.createElement("button");
  divContainer.appendChild(newButton);
  newButton.innerText = "100 BTN";
}
