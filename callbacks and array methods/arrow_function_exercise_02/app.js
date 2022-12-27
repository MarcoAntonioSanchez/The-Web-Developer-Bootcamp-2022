// Arrow Function Exercise
// Write an arrow function expression called greet.

// It should accept a single string argument,
// representing a person's name.

// It should return a greeting string as shown below:

// greet("Hagrid"); //"Hey Hagrid!"
// greet("Luna"); //"Hey Luna!"
// Be sure to use arrow function syntax!

// Answer:
const greet = (str) => {
  return (str = `Hey ${str}!`);
};

console.log(greet("Hagrid")); //"Hey Hagrid!"
console.log(greet("Luna")); //"Hey Luna!"
