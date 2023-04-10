// Selecting and saving the form, input and ul elements into variables
const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

// Adding an event listener, on submition, to the form variable
form.addEventListener("submit", function (e) {
  // Preventing default behavior, page reload
  e.preventDefault();
  // Catching the input value, text writed into the input
  const catName = input.value;
  // Create a new li element, empty
  const newLi = document.createElement("li");
  // Update the innerText attribute from the new li element, to be the cat name (input)
  newLi.innerText = catName;
  // Inserting the new li element into the ul list
  list.append(newLi);
  // Cleaning the value from the input element, to be clear
  input.value = "";
});
