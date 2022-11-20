// Variables

// Variables are like lablels for values
// We can store a value and give it a name so that we can:

// - Refer back to it later
// - Use that value to do... stuff
// - Or change it later on

// Basic syntax

// Make me a variable called "year" and give it the
// value of 1985

let someName = value;
let year = 1985;

// Examples

let numHens = 5;
let numRoosters = 1;

numHens + numRoosters;
// 6

numHens + 1;
// 6

let totalChickens = numHens + numRoosters;

totalChickens;
// 6

// There are two ways to update a variable:
// The 1st one consist in updating it "manually":

numHens = 6;

// numHenks use to be equal 5, now holds the value of 6
// The second way consist in graving the actual value first:

numHens = numHens + 2;

// Now numHens has the value of 8.

// What would happen if we call the: totalCHickens variable?
// now that we update the numHens variable value?
// The answer is nothing would happen, the "totalChickens"
// variable is sort of a "snapshot" in time that will retain
// it's creation values and it will not update itself
// accordingly to the variable-value updates/changes.
