// This is a refactored version of the score keeper code allong project
// Resulting in a shorter syntax and optimized performance re using code

// First we set the html tags into object properties, inside each player constants
const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

// Then we add the html reset button and select input into constants
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

// The variables for both player's score are intialized in 0, winning score is set to 3 by default and the game over status variable is initialized as false
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

// We start a function for update the scores of both players, with 2 arguments passed: Player and Opponent
function updateScores(player, opponent) {
  // First we check if the game over status is false to keep running the function's code
  if (!isGameOver) {
    // Then we add the player a score of 1
    player.score += 1;
    // We check if the player score is strictly equals t the winning score set with the select input
    if (player.score === winningScore) {
      // If the score is equals, the game over status is updated to true
      isGameOver = true;
      // And both the player and opponents get the respective winning and looser color classes
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      // Both player buttons are disabled
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    // And the display score tag gets updated
    player.display.textContent = player.score;
  }
}

// We add an event listener on click to start the update function with p1 as player and p2 as opponent
p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

// Then we add another event listener on click to the player 2 button, but with the p2 as player and the p1 as opponent
p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

// The winnins score selection event listener on change keeps the same syntax
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  // Resetting the game once the winning scode selection is updated
  reset();
});

// Same event listener in click for the above funciont in the reset button
resetButton.addEventListener("click", reset);

// For least, the reset function, wich major changes are the both player's beign managed as objects
// So the attributes inside each player are controled ussing the p variable for the handle of both players objects
function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
