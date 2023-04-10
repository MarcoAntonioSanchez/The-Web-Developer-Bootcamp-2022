// Click Events Exercise
// Let's get some practice using addEventListener. I've provided you with two buttons, each with an id: 'hello' and 'goodbye'.  Your goal is to add a click listener to each button.

// - When the hello button is clicked, you should console.log "hello"
// - When the goodbye button is clicked, you should console.log "goodbye"

// YOUR CODE GOES HERE:
const helloBtn = document.querySelector("#hello");
const goodbyeBtn = document.querySelector("#goodbye");

helloBtn.addEventListener("click", function () {
  console.log("hello");
});

goodbyeBtn.addEventListener("click", function () {
  console.log("goodbye");
});
