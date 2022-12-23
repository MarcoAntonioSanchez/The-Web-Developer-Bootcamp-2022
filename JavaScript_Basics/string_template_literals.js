// Template literals

"I counted ${3 + 4} sheep"; // "I counted 7 sheep"

// Template literals are strings that allow embedded expressions,
// wich will be evaluated and then turned intro a resulting string

let product = "Artichoke";
let price = 3.99;
price = 2.25;
let qty = 5;

"You bought " + qty + " " + product + ". Total is: " + price * qty;

// This last solution is very heavy and has alot of unnecesary
// code.

// We use back-ticks not single quotes
// `I am a template literal`
// The back-tick key is usually above the tab key

// `Hello ${1 + 2}`;
// Hello 3

`You bought ${qty} ${product}. Total is: $${price * qty}`;
