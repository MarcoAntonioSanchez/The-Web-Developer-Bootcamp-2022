// Arrow functions wrap up

// Simple arrow with movie title's and score's as attributes
const movies = [
  {
    title: "Scarface",
    score: 90,
  },
  {
    title: "The godfather",
    score: 95,
  },
  {
    title: "Bad boys",
    score: 99,
  },
  {
    title: "The warriors",
    score: 92,
  },
];

// Returning the movie titles and scores by mapping the array
movies.map(function (movie) {
  return `${movie.title} - ${movie.score / 10}`;
});

// Implicit return of the same function as before
const newMovies = movies.map((movie) => `${movie.title} - ${movie.score}`);
