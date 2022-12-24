// Truthy and Falsy values
// All JavaScript values have an ineherent truthyness or falsyness
// about them

// Falsy values
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

// Everything else is truthy

// If we enter an empty string, this will be considered false
const userInput = prompt("Enter something");

if (userInput) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// If we enter the number 0, this will be considered false too
if (0) {
  console.log("tRUTHY");
} else {
  console.log("Falsy");
}
