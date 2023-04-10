// addEvetListener
// Specify the event type and a callback to run

// const buttons = document.querySelector("h1");

// buttons.addEventListener("click", () => {
//  alert("You cliked me!");
// });

// Selecting and saving the v3 button into a variable
const btn3 = document.querySelector("#v3");
// Adding an event listener to the v3 button, with a function
btn3.addEventListener("click", function () {
  alert("clicked");
});

// Declaring a function called twist
function twist() {
  console.log("Twist");
}
// Declaring a function called shout
function shout() {
  console.log("Shout");
}
// Selecting twist and shout button (tas)
const tasButton = document.querySelector("#tas");
// Assinging the function shout to a on click event
tasButton.onclick = shout;
tasButton.onclick = twist;

// In the example above, the twist function is the one
// that will be running on each click event, because
// it is the last in the code

tasButton.addEventListener("click", shout);
tasButton.addEventListener("click", twist);

// Using addEventListener, both events are runned on each click event
