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
