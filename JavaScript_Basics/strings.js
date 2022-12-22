// Strings

// "Strings of characters"
// Strings are another primitve type in JavaScript.
// They represent text, and must be wrapped in quotes.

let username = Marco; // WRONG
let userName = "Marco"; // STRING

// There are two types of quotes you can use in JavaScript,
// the double "" and the single '', you must remain consistant
// when you use one type of quotes or the other, for example:

let favAnimal = "King Lion"; // Consistent with single quotes
let anotherFavAnimal = "Corvus Reigh"; // Consistent with fouble quotes
// let lessFavoriteAnimal = 'Octopus" // Mix them is WRONG
// let recentlyNewAnimal = 'Crow // Not closing the quotes will cause errors

// Another point to come across is that a number inside
// quotes is consider a string, not a number:

let luckyNumber = 7; // Type number
let singleNumber = "10"; // Type string

// You can have larger strings as you want, can be 100 - 1000
// characters long or could be empty if you need it too:

let emptyString = "";
let anotherEmptyString = "";

// The only case where you mau need to mix both types of quotes
// could be when you are quitating some text inside a conversation,
// for example:

let userMarcoSays = "And then she told me: 'Go away! i hate you', and then...";

// You can do it viceversa too:

let userRavenSays = 'Its my turn to quotate: "This is a quote".';
