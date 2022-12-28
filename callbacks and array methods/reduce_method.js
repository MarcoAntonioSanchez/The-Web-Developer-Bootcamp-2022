// The reduce method
// Executes a reducer function on each element of the array
// resulting in a single value

// It takes some array and reduce it to a single value

// Summing an array
// It beggins with 3 as accumulator, and 5 as currentValue
// The sum of these two is 8
// In the next iteration, the accumulator is equal to 8, and
// the currentValue will be 7...

// Syntax
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// Simple array of numbers w/ decimal
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// No reduce version
// Starting variable total on cero
let total = 0;
// Loop for so pass ine attribute at a time to the argument
for (let price of prices) {
  // Argument, add plus price as total's vriable value
  total += price;
}
// 111.97

// Reduce version
// We pass two parameters to reduce, total as accumulator
// and price as current value
const totalCopy = prices.reduce((total, price) => {
  // Return the accumulator + current value
  return total + price;
});
// 111.97

// Redice version with no implicit return
const anotherTotalCopy = prices.reduce((total, price) => total + price);
// 111.97

// Reduce version, that compares parameters instead of adding them
// We start with the 2 attributes, min as accumulator
// and price as current value
const minPrice = prices.reduce((min, price) => {
  // if the accumulator is greater than the current value
  if (price > min) {
    // then return the current value
    return price;
  }
  // Otherwise return the accumulator
  return min;
});
// Output: 1.50
// Whatever the result of the coditional, the one that passes
// this condition is the return value that will be assign as
// accumulator in the next iteration of reduce

// Simple arra of movie objects
movies = [
  {
    title: "Amadeus",
    score: 70,
    year: 2020,
  },
  {
    title: "Stand by mme",
    score: 85,
    year: 1989,
  },
  {
    title: "Parasite",
    score: 95,
    year: 1996,
  },
  {
    title: "Alien",
    score: 75,
    year: 1978,
  },
];

// Get the maximum score number in the movies array
// We start storgint the redice over the movies array on a constant
// Then we set our two parameters, bestMovie as accumulator
// and currentMovie as current value
const highestRated = movies.reduce((bestMovie, currentMovie) => {
  // Conditional, if the score of the accumulator, is greater
  // than the score of the current value
  if (currentMovie.score > bestMovie.score) {
    // then return the current value
    return currentMovie;
  }
  // Otherwise return the accumulator
  return bestMovie;
});
// { title: "Parasite", score: 95, year: 1996 }

// Simple array of even numbers
const evens = [2, 4, 6, 8];

// Get the total of the evens array
evens.reduce((sum, num) => sum + num);
// 20

// Get the total of the evens array, starting on 100
evens.reduce((sum, num) => sum + num, 100);
// 120
