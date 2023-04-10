// Form Events Exercise
// Time to get some practice working with forms and form events! index.html already has a form element that contains two <input> elements, one for quantity and one for a product name.  index.html also contains an empty <ul> where you will append new <li>'s.  Watch the gif at the bottom for an overview of how your code should work. Your task is to follow these steps:

// - Listen for the form submission
// - When the form is submitted, prevent the default behavior
// - Grab the quantity input value and the product input value
// - Create a new <li> element.  Set the text on the new <li> to include the quantity and product name from the form.
// - Append the new <li> to the <ul> on the page
// - Reset the inputs

// YOUR CODE GOES HERE:
const form = document.querySelector("form");
const product = document.querySelector("#product");
const qty = document.querySelector("#qty");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const productValue = product.value;
  const productQty = qty.value;
  const newLi = document.createElement("li");
  const ulList = document.querySelector("#list");

  newLi.append(productValue);
  newLi.append(productQty);
  ulList.append(newLi);

  product.value = "";
  qty.value = "";
});
