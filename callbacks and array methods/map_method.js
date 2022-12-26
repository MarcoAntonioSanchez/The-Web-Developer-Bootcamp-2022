// Map method

// Creates a new array with the results of calling a callback
// on every element in the array

// Example

// Simple array of hashtags
const texts = ["rofl", "lol", "omg", "ttyl"];

// Mapping the array
const caps = texts.map(function (t) {
  // and returning attributes in upper case letters
  return t.toUpperCase();
});
texts; // ["rofl", "lol", "omg", "ttyl"]
caps; // "ROFL", "LOL", "OMG", "TTYL"]

// Simple array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Saving the .map() function in a variable called doubles
const doubles = numbers.map(function (num) {
  // Mapping attributes and multiply them by 2
  return num * 2;
});

// Movies example

// Array of movie objects
const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand by mme",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

// Saving the .map() function on constant titles
const titles = movies.map(function (movie) {
  // Mapping will return the titles of the movies
  // in upper case letters
  return movie.title.toUpperCase();
});
