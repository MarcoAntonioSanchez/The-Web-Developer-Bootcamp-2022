// The filter method

// Creates a new array with all elements that pass the test
// implemented by the provided function

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// Our callback returns true or false if it returns true,
// n is added to the filtered array
const odds = nums.filter((n) => {
  return n % 2 === 1;
});

// Output: [9, 8, 7, 6, 5, 4, 3, 2, 1]

// Implicit returns example
const smallNums = nums.filter((n) => n < 5);
// Output: [4, 3, 2, 1]

// Simple array of movies with title, year and score as attributes
const movies = [
  {
    title: "Grease",
    year: 1989,
    score: 91,
  },
  {
    title: "Fast and furious",
    year: 2003,
    score: 90,
  },
  {
    title: "Jhon Wick",
    year: 2015,
    score: 81,
  },
  {
    title: "Jumnanji",
    year: 1988,
    score: 75,
  },
  {
    title: "Avengers",
    year: 2012,
    score: 85,
  },
];

// Get the movies with socre greater than 90
const goodMovies = movies.filter((m) => m.score > 90);
// Output: [{title: "Grease", year: 1989, score: 91}, {etc...}]

// Get the previous filtered good movies title
// Filtering with a previous filter using map
const goodTitle = goodMovies.map((m) => m.title);
// Output: [{"Grease"}]

// Get the movies with a score less than 80
const badMovies = movies.filter((m) => m.score < 80);
// Output: [{title: "Jumanji", year: 1988, score: 75}]

// Get the movies more recent filtered by year
const recentMovies = movies.filter((m) => m.score > 2000);
// Output: [{title: "Fast and furious", year: 2003, score: 90}, {etc...}]
