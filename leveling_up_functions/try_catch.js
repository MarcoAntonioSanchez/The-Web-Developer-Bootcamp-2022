// Try catch

hello.toUpperCase(); // hello doesn't exist, is not declared
// Error not catch

// Using try catch to handle the error that unexisting hello
// may produce

try {
  hello.tuUpperCase();
} catch {
  console.log("Error found");
}

function yell(msg) {
  try {
    // If this doesn't work
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    // e, referencing the error, catch the possible error
    console.log(e); // print the error
    console.log("Please pass a string next time1"); // allong with an error message
  }
}
