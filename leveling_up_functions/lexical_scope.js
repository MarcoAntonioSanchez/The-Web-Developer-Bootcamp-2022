// Lexical scope

function outer() {
  let hero = "black panther";
  function inner() {
    let cryForHelp = `${hero}, please save me!`;
    console.log(cryForHelp);
  }
  inner();
}

// Lexical scoping
// Outside function as bankRobbery();
function bankRobbery() {
  // Heroes list inside the outside function
  const heroes = ["Spiderman", "Wolverine", "Black Panther"];
  // Inside function as cryForHelp()
  function cryForHelp() {
    // Loop using as parameters the constant declared in the
    // outside function, heroes
    for (let heroe of heroes) {
      console.log(`Please help us!, ${heroe.toUpperCase()}`);
    }
  }
  // Calling the inside function, from the outside function
  // at the very end of the execution
  cryForHelp();
}
bankRobbery(); // Undefined
