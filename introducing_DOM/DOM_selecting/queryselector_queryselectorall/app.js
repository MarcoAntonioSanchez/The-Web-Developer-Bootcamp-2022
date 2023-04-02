// querySelector
// A newer, all-in-one method to select a single element

// Finds first h1 element:
document.querySelector("h1");

// Finds first element with ID of red:
document.querySelector("#red");

// Finds first element with class of:
documenbt.querySelector(".big");

// Get all the paragraph elements
document.querySelector("p");
// Output: HTMLCollection(2)

// Using selectors
document.querySelector("img:nth-of-type(2)");
// Output: second img element

// Using selector by attribute
document.querySelector('a[title="Java"]');
// Output: anchor tag with title of "Java"

// querySelectorAll
// Same idea, but returns a collection of matching elements

document.querySelectorAll("p");
// Output: all matching p elements in the HTML document

const links = document.querySelectorAll("p a");

for (let link of links) {
  console.log(link.href);
}
