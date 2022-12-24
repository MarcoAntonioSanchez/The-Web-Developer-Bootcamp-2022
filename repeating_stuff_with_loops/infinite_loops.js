// Infinite loops

// Do not run this code:
// for (let i = 20; i >= 0; i++){
//    console.log(i);
// }

// Good tip to avoid infinite loops.
// Make your self the following question:
for (
  let i = 0;
  i <= 10; // Is this condition's gonna change at some point?
  i++
) {
  console.log(i);
}
