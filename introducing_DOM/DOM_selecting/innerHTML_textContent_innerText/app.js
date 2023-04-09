// innerHTML, textContent & innerText
// 1 Select, 2 Manipulate

// Properties & methods
// - classList
// - getAttribute()
// - setAttribute()
// - appendChild()
// - append()
// - prepend()
// - removeChild()
// - remove()
// - createElement
// - innnerText
// - textContent
// - innerHTML
// - value
// - parentElement
// - children
// - nextSibling
// - previousSibling
// - style

// Selecting and printing in console the first p tag innerText content
const firstParag = document.querySelector("p").innerText;
console.log(firstParag);

// Modyfing and printint in console the first p tag innerText content
const firstParagMod = (document.querySelector("p").innerText =
  "This is modified using query selector");
console.log(firstParagMod);

// A difference between innetText and innerContent:
// innerText: will only show the content visible, not the hidden (like HTML tags) .
// innerContent: will show all the content, included the hidden (again, HTML tags).
// both of them can be used to manipulate the content between the selected opening and closing tags.

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.innerText = "I AM A LINK!";
}

// innerHTML
// innerHTML it's gonna give us the entirety of the markup

// In this case, the HTML markup it's treated as plain text
document.querySelector("h1").innerText = "<i>Hi innerTEXT</i>";

// Using innerHTML, the html tags get recognized
document.querySelector("h1").innerHTML = "<i>Hi! innerHTML</i>";

// Instead of updating the value, you can concatenate them
document.querySelector("h1").innerHTML += "<sup> super script</sup>";
