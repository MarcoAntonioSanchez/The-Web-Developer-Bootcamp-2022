// Param destructuring

// Arrow function into constant full name
// This function prints out the first and last name strings together
const fullName = ({ first, last }) => {
  return `${first} ${last}`;
};

// Simple object into contant called runner
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
};

// Calling fullName function for runner's first and last name
fullName(runner); // "Eliud Kipchoge"

// Function fullName with user passed as a parameter
// That returns user's first and lastName
function fullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

// Same function as before, but destructuring firstName and lastName
// attributes from the passed parameter user
function fullNameCopy(user) {
  const { firstName, lastName } = user;
}

// Destructuring params example with first and lastName attributes
function anotherFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

// Simple array of movie objects
const movies = [
  {
    title: "Scarface",
    score: 85,
  },
  {
    title: "The godfather",
    score: 91,
  },
  {
    title: "Bad boys",
    score: 90,
  },
  {
    title: "The warriors",
    score: 89,
  },
];

// Get the movies with the score greater than or equal to 90
movies.filter((movie) => movie.score >= 90);
// [{title: "Scarface", score: 85}, {title: "Bad boys", score: 90}, {title: "The warriors", score: 89,}];

// Same filter as before, but with the parameter score destructured
movies.filter(({ score }) => score >= 90);
// [{title: "Scarface", score: 85}, {title: "Bad boys", score: 90}, {title: "The warriors", score: 89,}];

// Using map to iterate through all the attributes in movies array
// and return the title and score into a string
movies.map((movie) => {
  return `${movie.title} is rathed: ${movie.score}`;
});
// "Movie title is rathed: 85"
// "Movie title is rathed: 91"
// "Movie title is rathed: 89"
// "Movie title is rathed: 90"

// Using map, same as before but destructuring the parameters
// of title and score
movies.map(({ title, score }) => `${title} is rathed: ${score}`);
// "Movie title is rathed: 85"
// "Movie title is rathed: 91"
// "Movie title is rathed: 89"
// "Movie title is rathed: 90"
