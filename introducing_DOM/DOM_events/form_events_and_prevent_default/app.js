// Selecting and saving the form element into a variable
const form = document.querySelector("#shelterForm");
// Adding an event listener on submition
form.addEventListener("submit", function (e) {
  // e to prevent the default behavior of changing to the action parameter page
  e.preventDefault();
  console.log("submited");
});
