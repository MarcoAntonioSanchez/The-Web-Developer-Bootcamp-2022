// Accesing data out of objects

// You can access to values into objects with the bracket braces
// just like with the arrays.

const person = {
  firstName: "Raven",
  lastName: "Milosh",
  personAge: 28,
};

person["firstName"]; // You can place the desire key in quotes.
// Output: "Raven"

// Or you can directly access to it referencing to the value
// just when you call it:

person.firstName;
// "Raven"

// When you index for a key into an object with the bracket braces
// it doesn't matter if you use quotation or directly the key-value reference
// JavaScript will convert it to a string and then look for it:
const years = { 1999: "good", 2000: "bad" };
years;
// 1999: "good", 2000: "bad"
years[1999];
// "good"
years["2000"];
// "bad"

// You can evaluate variables into the bracket braces
// so they will be trated as your object key-value
let birthday = "2020";
years[birthday];
// "bad"
