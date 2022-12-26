// For each

// Accepts a callback function.
// Calls the function once per element in the array.

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
  console.log(n * n);
  // prints: 81, 64, 49, 36, 25, etc...
});

nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
    // prints: 8, 6, 4, 2
  }
});

// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// A function called print with variable element as parameter
// that prints out in the console it self
function print(element) {
  console.log(element);
}

// Calling previous function with array index of cero
// Calling previous function with array indexa of 1
print(numbers[0]);
print(numbers[1]);

// Each element contained in the array gets iterated
// and stores temporally into the element variable

// Using for each with an if function that checks if el mod by 2
// is equal to 0 (pairs) printed in console
numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

// A array of objects with 2 pairs of attributes
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

// Printing out each of the attributes contained in the array
movies.forEach(function (movie) {
  // printing out the movies titles and scores /100
  console.log(`${movie.title} - ${movie.score}/100`);
  // console.log(movie); prints out the entire object
});
