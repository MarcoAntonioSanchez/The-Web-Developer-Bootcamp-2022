// String methods

// Methods are built-in actions we can perform with individual strings
// They help us do things like:

// - Searching within a string.
// - Replacing part of a string.
// - Changing the casing of a string.

// thing.method()
// "hello".length
// 5

// Casing:

let msg = "I am king";
let yellMsg = msg.toUpperCase();
// 'I AM KING'

let angry = "LeAvE mE aLoNe!";
angry.toLowerCase();
// 'leave me alone!'

// The value in agnry is unchanged
angry;
// 'LeAvE mE aLoNe!'

// Trim:

let greeting = "     leave me alone plz     ";
greeting.trim();
// 'leave me alone plz'

// The trim method just cuts the extra space chars in the sides,
// before the string starts and after the string ends.

// You can use multiple methods to your string variables, for example:

let tempMessage = "   Hi! this a temporarely msg..     ";
tempMessage.trim().toLowerCase().toUpperCase();

tempMessage;
// "hi! this a temporarely msg.."
