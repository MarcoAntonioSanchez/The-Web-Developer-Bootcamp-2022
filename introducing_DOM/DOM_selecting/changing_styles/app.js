const h1 = document.querySelector("h1");
// Selecting the inline styles attribute from the h1 tag
h1.style;

// Updating the color propertie from the inline style
h1.style.color = "red";

// Updating the font-size css inline propertie
// Note that the fontSize is writed in cammel-notation
// Every CSS attribute with "-" on it, will be writen as this
h1.style.fontSize = "12px";

// Savig all links into a allLinks variable
const allLinks = document.querySelectorAll("a");

// Using a for lopp to change the color inline style propertie of allLinks
for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
}

// Deprecated?
window.getComputedStyle(h1).margin;
