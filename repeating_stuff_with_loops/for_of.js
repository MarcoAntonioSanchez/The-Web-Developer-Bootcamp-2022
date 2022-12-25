// The lovely for...of
// Not supported on Internet Explorer

// Iterate through an array with a for loop
const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];
for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits}`);
}

// For...of syntax
for (variable of iterable) {
  statement;
}

// Iterate thorugh an array with a for...of loop:
for (let sub of subreddits) {
  console.log(sub);
}

// A nice and wasy way of iterating over arrays
// (or other iterable objects)
const seatingChart = [
  ["Ms. Lindsay", "Mr. Abbot", "Sr. Manuel"],
  ["Ms. Larson", "Mr. Stark", "Sr. Morales"],
  ["Ms. Lexy", "Mr. Ryan", "Sra. Brown"],
];

// a for...of nested intro another for..of
for (let row of seatingChart) {
  for (let student of row) {
    console.log(student);
  }
}

// Iterating over something it's not an array
// with a for...of loop
for (let char of "hello world ") {
  console.log("char");
}
