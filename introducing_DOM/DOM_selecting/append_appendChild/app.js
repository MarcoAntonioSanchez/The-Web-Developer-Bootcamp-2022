// Create a new img element ans save it into a variable
const newImage = document.createElement("img");
console.dir(newImage);

// Updating the source attribute from the new img element
newImage.src =
  "https://images.unsplash.com/photo-1544239051-59e55f169de5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80";

// Appending the new img element to the body tag so it can ve seen into the HTML
document.body.appendChild(newImage);
// Updating the class of the new image to square just like the others in the page
newImage.classList.add("square");

// Create a new h3 element and save it into a variable
const newH3 = document.createElement("h3");
// Updating the inner text attribute from the new h3 element
newH3.innerText = "I am new";
// Appending the new h3 element to the body tag so it can ve seen into the HTML
document.body.appendChild(newH3);

// Append is more flexible, but doesn't work in IE
const p = document.querySelector("p");
// Appending new line of text into the first p element into the HTML template
p.append("I AM A NEW TEXT, APPEND");

// Create a new bold element and saving it into a variable
const newB = document.createElement("b");
// Appending text line to the new bold element
newB.append("Hi! i am a prepend. ");
// Prepending the new bold element into the first paragraph
p.prepend(newB);

// Create and save a new h2 element into a variable
const h2 = document.createElement("h2");
// Appending text line into the new h2 element
h2.append("Adorable Chickens");

// Selecting the first h1 element and saving it into a variable
const h1 = document.querySelector("h1");
// Inserted the previously created h2 element after the end of the h1 element
h1.insertAdjacentElement("afterend", h2);

// Create and sabe a new h3 element into a variable
const h3 = document.createElement("h3");

// Updating the inner text attribute from the new h3 element
h3.innerText = "I AM H3";
// Inserting the new h3 element after the previously selected h1 element
h1.after(h3);
