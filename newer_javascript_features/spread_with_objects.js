// Spread in object literals

// Copies properties from one object into another object literal
const feline = { legs: 4, family: "Felidae" };
const canine = { family: "Canine", furry: true };

const dog = { ...canine, isPet: true };
// {family: "Canine", Furry: true, isPet: true}

const lion = { ...feline, genus: "Panthera" };
// {legs: 4, family: "felidae", Genus: Panthera}

// If attributes are repeat it within objects, the value will be
// over written by the object's attribute at the right.
const catDog = { ...feline, ...canine };
// {legs: 4, family: "Canine", Furry: true}

// It also applys when we add arguments with the spread method,
// so last argument will be the last over write
const catDogCopy = { ...feline, ...canine, family: "Birded" };
// {legs: 4, family: "Birded", Furry: true}

// What would happen if we spread an array into an object?
// {...[1, 2, 6, 8]};

// The index is used as key and the arguments are used as values
// to deliver a new object
// Output: {0: 2, 1: 4, 2: 6, 3: 8}

// Same would happens to the strings
// {..."Hiii"};
// Output: {0: H, 1: i, 2: i, 3: i}

// Practical example of some object with user info.
const dataFromFrom = {
  email: "blueman@gmail.com",
  password: "tobias123",
  username: "tfunke",
};

// We can take the object's info contained in dataFromForm
// and add new arguments while spread to copy the original object
const newUser = { ...dataFromFrom, id: "2345", isAdmin: "false" };
newUser;
// Output: { email: "blueman@gmail.com", password: "tobias123", username: "tfunke", id: 2345, isAdmin: false}
