// Functions with multiple arguments

// Two arguments
// Simple function that prints out a alert in the console
// with the larger number entered
function findLargest(x, y) {
  if (x > y) {
    console.log(`${x} is larger`);
  } else if (x < y) {
    console.log(`${y} is larger`);
  } else {
    console.log(`${x} and ${y} are equal`);
  }
}

findLargest(-2, 77);
// 77 is larger

findLargest(33, 33);
// 33 and 33 are equal

// Another simple greet function, expects two parameters
function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName}`);
}
// Order is important, notice how first name and last name
// are writed in the order they will be received in the function
greet("Raven", "Milosh");

// Starting off a function that will repeat a determined number of times
// the string entered by the user
// We start managing 2 parameters
function repeat(str, numTimes) {
  // Variable that contains the string (or will contain)
  let result = "";
  // A for loop to iterate the number of times the user enters
  for (let i = 0; i < numTimes; i++) {
    // Concatenate the string entered by the user in the variable result the number of times looped
    result += str;
  }
  // Finally we print out the result via console
  console.log(result);
}

repeat("hi", 3);
// "hi" "hi" "hi"
