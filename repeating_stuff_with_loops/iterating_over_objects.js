// Iterating over objects

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  marlon: 72,
  shawn: 91,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

for (let person of testScores) {
  console.log(person);
}
// error "person" is not iteritable

// key "scored" value
for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}

Object.keys(testScores);
// ["Keenan", "damon", "kim", "marlon", etc...]

Object.values(testScores);
// [80, 67, 89, 72, etc...]

Object.entries(testScores);
// [[array: 1], [array: 2], [array: 3], etc...]

// Get the average of the array testScores, dividing it by the
// length of the total sum of the values in the array
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
