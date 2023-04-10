// Selecting and saving the v2 button
const btn = document.querySelector("#v2");

// Initializing the function on click event over the v2 button
btn.onclick = function () {
  console.log("you clicked me");
  console.log("i hope it works!");
};

// Defining a function scream
function scream() {
  console.log("Haaaaaaaa!");
  console.log("stop touching me");
}

// Defining the mouse enter event to the scream function
btn.onmouseenter = scream;

// Making an alert when the h1 in the HTML template it's clicked
document.querySelector("h1").onclick = function () {
  alert("You clicked the h1!");
};
