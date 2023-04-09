const firstBold = document.querySelector("b");

console.log(firstBold.parentElement);
// Output: p Tag
console.log(firstBold.parentElement.parentElement);
// Output: body tag
console.log(firstBold.parentElement.parentElement.parentElement);
// Output: HTML tag

// Saving the parent p tag from the firstBold element into a variable
const paragraph = firstBold.parentElement;
// Indexing over the parent element from the first children of the paragraph
console.log(paragraph.children[0].parentElement);

// Saving the images containing the square class into a variable
const squareImg = document.querySelector(".square");

// Printing the next sibling element to the square image
console.log(squareImg.nextSibling);
// Output: Next NODE sibling
console.log(squareImg.previousSibling);
// Output: Previous NODE sibling

// The problem with the NODE siblings values, it's that it not contain
// the directly next or previous sibling html tag / value that we expecT.
// Instead, it will return the next / previous NODE sibling wich it's an empty
// text element (a back-roll).

console.log(squareImg.nextElementSibling);
// Output: The next image in the HTML markup (Expected outcome)
console.log(squareImg.previousElementSibling);
// Output: The previos p tag element in the HTML markup (Expected outcome)
