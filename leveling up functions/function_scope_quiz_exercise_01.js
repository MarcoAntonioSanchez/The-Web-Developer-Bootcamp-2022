// Function Scope Quiz

// Question 1:
// What is printed to the console when this code runs?

let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal);
}
observe();

// "Pajama Squid"

// Question 2:
// What is the result of running the following code:

const creature = "Common Sea Dragon";

function scubaDive() {
  const creature = "Spanish Dancer"; //A type of sea slug
  console.log(creature);
}

scubaDive();

// "Spanish Dancer"

// Question 3:
// What two values are printed to the console:

let deadlyAnimal = "Blue-Ringed Octopus";

function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}

handleAnimal();
console.log(deadlyAnimal);

// "Blue-Ringed Octopus"
// "Scorpionfish"
