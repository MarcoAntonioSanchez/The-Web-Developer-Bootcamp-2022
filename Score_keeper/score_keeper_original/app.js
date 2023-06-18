// Saving all html tags into constants for later use
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

// Starting the score, winning score and game over status into variables
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

// First we add an event listener on the number 1 player button, then we run a function on that click event
p1Button.addEventListener("click", function () {
  // Now we check if the game over status is not true
  if (!isGameOver) {
    // Then we add 1 to the player 1 score
    p1Score += 1;
    // Next we check if the player 1 score is strictly equals to the winnign score defined above
    if (p1Score === winningScore) {
      // If it is, the game over status value gets updated to true
      isGameOver = true;
      // And then we add the respective classes to each player, with the looser and winner colors
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      // We also disabled buttons for both players
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    // This display player 1 on the score it's inside the 1st if to prevent new displays to be updated
    p1Display.textContent = p1Score;
  }
});

// Logic for the player number 2 is just the same as the player number 1
p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

// The winning score select input gets a event listener to run a function on values changes
winningScoreSelect.addEventListener("change", function () {
  // Function here will update the winning score variable value to the one selected via the html input
  winningScore = parseInt(this.value);
  // The game gets reseted with a function
  reset();
});

// An event listener in the reset button, when clicked
resetButton.addEventListener("click", reset);

// Reset function starts with no data passed
function reset() {
  // Game over status variable is set to false
  isGameOver = false;
  // Both scores are set to 0
  p1Score = 0;
  p2Score = 0;
  // The display content of the scores gets updated to 0 as well
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  // And the the winner and looser color classes are removed
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  // For least, both player buttons are enabled for a new game to start.
  p1Button.disabled = false;
  p2Button.disabled = false;
}
