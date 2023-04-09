// Selecting and saving the first li element from the HTML template
const firstLi = document.querySelector("li");
// firstLi.removeChild

// Selecting the parent element of the first li and saving it into a variable
const ul = firstLi.parentElement;
// Removing the first li by selecting the parent ul element
// Using removeChild
ul.removeChild(firstLi);

// Selecting the first image element in the HTML template
const img = document.querySelector("img");
// Removing the img element
// Using .remove()
img.remove();
