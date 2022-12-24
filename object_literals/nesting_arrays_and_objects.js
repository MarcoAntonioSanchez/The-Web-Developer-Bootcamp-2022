// Nesting arrays and objects

// Arrays + Objects
const comments2 = [
  { product: "Jenga Classic", price: 6.88, quantity: 1 },
  { product: "Echo Dot", price: 29.99, quantity: 3 },
  { product: "Fire Stick", price: 39.99, quantity: 2 },
];

// An array with an object and an array into it
const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

// An array of objects
const comments = [
  { username: "Tammy", text: "lololol", votes: 9 },
  { username: "Tammy", text: "awesome", votes: 4 },
];

// Accessing values into de array of objects
comments[1].text; // 'awesome'
