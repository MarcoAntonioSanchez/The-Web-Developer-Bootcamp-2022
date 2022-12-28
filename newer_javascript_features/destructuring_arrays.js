// Destructuring
// A short, clean syntax to 'unpack':
// - Values from arrays
// - Properties from objects
// Into distinct variables

// A simple array with strings of the names of famous racers
const raceResults = ["Eliud Kipchoge", "Feyisa Lelisa", "Galen Rupp"];

// Deconstructuring the array of strings, with this syntax
const [gold, silver, bronze] = raceResults;
// Then we single out each string, ordered position by calling
// the variable used to deconstructure the array's strings
gold; // "Eliud Kipchoge"
silver; // "Feyisa Lelisa"
bronze; // "Galen Rupp"

// Deconstructuring with same array as before
// but with a fastest variable to single out 1st string on the array
// and then collecting the REST of strings into a new array
// with ...everyoneElse spread method
const [fastest, ...everyoneElse] = raceResults;
fastest; // "Eliud Kipchoge"
everyoneElse; // ["Feyina Lelisa", "Galen Rupp"]

// Simple array of numbers, scores in this imaginary race
const scores = [3245234, 12445532, 1523566, 23536526, 214235];
// The old manner to single out each number in the array
// without using the destructuring method
const highScore = scores[0];
const secondHighScore = scores[1];

// The deconstructuring is set with bracket braces as we are
// deconstructuring values from an array

// Another destructuring of the previous array of numbers
// single out the first three values with 3 variables corresponding
// to the first, second and third places.
// At the end we collect the REST of numbers into the array with spread
const [firstPlace, secondPlace, thirdPlace, ...restElse] = scores;
firstPlace; // 3245234
secondPlace; // 12445532
thirdPlace; // 1523566
restElse; // [23536526, 214235]
