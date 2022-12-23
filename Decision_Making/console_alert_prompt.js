// Console, alert and prompt()

console.log("Hello"); // "Hello"
console.log("hello", 1, false); // "hello" 1 false

// Prints out a yellow warning colored output
console.warn("Hu HO WARNING!");

// Prints out a red error colored output
console.error("This is an error!");

// Window with an ok button will appear in browser
alert("Hi there...");

// A windows with an input asking for a user input
// will appear in the browser
prompt("Give me a number");

// Will remove the characters, leaving the numbers type only
let userInput = prompt("Give a number");
parseInt(userInput);
