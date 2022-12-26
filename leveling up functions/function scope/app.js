// Function scope

// Variable "visibility"
// The location where a variable is defined dictates where we
// have access to that variable

function collectEggs() {
  let totalEggs = 6;
  console.log(`Total eggs: ${totalEggs}`);
}

// console.log(`Total eggs: ${totalEggs}`);

// If you try to access the variable from outside the function
// you'll receive an error.

// console.log(totalEggs);

// When you declare a variable with the let keyword this
// gets scoped into the function so it only is available
// from inside the function

collectEggs();

let totalEggs = 0; // declaring the let variable from outside make it accesible from the oustide
function collectEggsCopy() {
  totalEggs = 6;
}
console.log(collectEggsCopy); // printing the variables value
collectEggsCopy(); // printing the variables "object"

// msg Is coped to the helpMe function

function helpMe() {
  let msg = "Im on fire!";
  msg; // "I'm on fire!"
}

msg; // Not defined

let bird = "Scarlet Macaw"; // outside the function
function birdWatch() {
  let bird = "Great blue heron"; // inside the function, scoped
  // console.log(bird); // this console.log change the game
  // making inside bird updates first close variable's value
}
bird; // "Scarlet Macaw"
birdWatch(); // it doesn't get to the console
