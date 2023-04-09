// You can select the attribute of a specific element
document.querySelector("#banner").id;

// Also, you can update the value
document.querySelector("#banner").id = "whoops";

// Getting back to it's original id
document.querySelector("#whoops").id = "banner";

// Saving a anchor tag attribute into a variable
const firstLink = document.querySelector("a");

// This way we call the "file:" pre-pend text
firstLink.href;

// This way we can call the link without the pre-pend "file:" text
firstLink.getAttribute("href");

// Updating the hred value of the first anchor tag element
firstLink.setAttribute("href", "https://google.com");

// Saving the input tag with checkbox type propertie into a variable
const input = document.querySelector('input[type="checkbox"]');
console.log(input.type);

// Getting the type attribute of the input tag
input.type;

// Updating the type attribute from the input tag
input.type = "color";
