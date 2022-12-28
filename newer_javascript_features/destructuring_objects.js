// Object destructuring
// More commonly used and more useful than destructuring arrays

// Simple object into a constant called runner
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};
// Destructuring first, last and country attributes as variables
// and not affecting the original object
const { first, last, country } = runner;
// Calling the values on variable's first, last and country
first; // Eliud
last; // Kipchoge
country; // Kenya

// Simple object into a constant called user
const user = {
  email: "harvey@gmail.com",
  password: "ScoT212Mith",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an Amercian politician and the first openly gay worker into the public office",
  ciy: "San Francisco",
  state: "California",
};

// This approach will be viable with a short ammount of attributes
// but whathappens when you have alot of them?
// const firstName = user.firstName;
// const lastName = user.lastName;

// You can try deconstructuring the object to acces that attributes
// right away
// Deconstructuring (single in them out) the email, firstName, lastName,
// city and bio's attributes from the user array
const { email, firstName, lastName, city, bio } = user;
// Calling out the values into this deconstructure attributes / variables
email; // harvey@gmail.com
firstName; // Harvey
lastName; // Milk
city; // San Francisco
bio; // Harvey Bernard Milk was an Amercian politician and the first openly gay worker into the public office

// When you deconstructure an object you can assign new variables names
// for an specific attribute, like this:
const { born: birthYear } = user;
// born; // undefined
// birthYear; // 1930

// Simple object into a constant called user 2
const user2 = {
  email: "stacy@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

// Deconstructuring the attributes from user2 array
// Last deconstructure attribute is a default string to died variable
const { city: originCity, state, died = "N/A" } = user2;
originCity; // Tulsa
died; // N/A
