// Nested loops

// Outer and inner nested loop example:
let str = "LOL";
for (let i = 0; i <= 4; i++) {
  console.log("Outer:", i);
  for (let j = 0; j < str.length; j++) {
    console.log("   Inner:", str[j]);
  }
}

// Another outer / inner for loop nested example
for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`);
  for (let j = 1; j < 4; j++) {
    console.log(`j is: ${j}`);
  }
}

// Another array compounded by other arrays
const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Ericka"],
];

// Accesing the arrays in the array
for (let i = 0; i < seatingChart.length; i++) {
  console.log(seatingChart[i]);
}

// Accesing the values of the arrays inside the array
for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
