// Strings are indexed

// C H I C K E N
// 0 1 2 3 4 5 6

// Each character has a corresponding index (a positional number)

let animal = "Dumbo Octopus";

animal[0]; // "D"
animal[1]; // "u"
animal[6]; // "O"
animal[99]; // Undefined (primitive value)

// You can navigate through the index associated with the
// characters in the strings to get the data you need / want.
// Just use the brackets braces:

let phone = "(231)345-1344";
phone[0]; // "("

// Another way to navigate through the index of the characters
// in any strings is with .length, for example:

animal.length; // 13

// the .length property give's us the actual length of characters
// in the string you use it.

let exampleString = "String";
exampleString.length; // 6

// But remember, to navigate through the index of the characters
// using the brackets braces you'll start counting on zero's "0".

// Concatenation of strings, example:

let stringOne = "lol";
let stringTwo = "lol";

stringOne + stringTwo; // "lollol"

// Another example using a little bit a logic:

let firstName = "Marco";
let lastName = "Sánchez";

let fullName = firstName + " " + lastName; // "Marco Sánchez"

// Something courious will happen if you concatenate a number
// type of chacracter with a string type of chacracter:

1 + "hi"; // "1hi"
let result = 1 + "hi"; // "1hi"

typeof result; // "string"
