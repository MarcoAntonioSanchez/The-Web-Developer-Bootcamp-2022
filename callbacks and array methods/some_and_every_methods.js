// Some and every mothods

// Some:
// Similar to every, but returns true if ANY pass the provided function.
// It returns a boolean true.

// Simple array of words
const words = ["dog", "jello", "log", "cupcake"];

// Are there any words longer than 4 characters?
words.some((word) => {
  return word.length > 4;
});
// Output: true

// Do any words start with 'Z'?
words.some((word) => [0] === "Z");
// Output: false

// Do any words contain 'cake'?
words.some((w) => w.includes("cake"));
// Output: true

// Simple array of numbers
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// Do any exam with a score greater than or equal to 75?
exams.every((score) => score >= 75);
// Output: true

// Simple array of object movies
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

// Do any movie is from the year 2015 or greater?
movies.some((movie) => movie.year > 2015);
