// Nesting
// We can nest conditionals inside conditionals

let password = "cat dog";
if (password >= 6) {
  if (password.indexOf(" ") !== -1) {
    console.log("Password cannot include spaces");
  } else {
    console.log("Valid password");
  }
} else {
  console.log("Password too short");
}

// Ask a user to enter a password

const passwordTwo = prompt("Please enter a new password");

if (passwordTwo.length >= 6) {
  if (passwordTwo.indexOf(" ") === -1) {
    console.log("Valid password");
  } else {
    console.log("Password cannot contain spaces");
  }
} else {
  console.log("Password too short. Must be 6+ chars.");
}
