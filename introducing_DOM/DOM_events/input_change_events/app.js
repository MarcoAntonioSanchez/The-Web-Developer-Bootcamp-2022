// EVENTS
// Respondign to user inputs and actions

const input = document.querySelector("#test");
const h1 = document.querySelector("h1");

// The change only occours when the "change" is proven
// or a real character change, for example
// input.addEventListener("change", function (e) {
//   console.log("Hello");
// });

// The change take effect as soon as the change occours
// or the character is typed, for example
input.addEventListener("input", function (e) {
  h1.innerText = input.value;
});
