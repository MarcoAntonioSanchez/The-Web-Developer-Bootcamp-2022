// Not (!)
// !Expression returns true if expression is false

!null; // true
!(0 === 0); // false
!(3 <= 4); // false

false; // false
!false; // true

!(1 === 1); // false
null; // null
!null; // false
!!null; // true

// Evaluates if the constant firstName is true just by beign there
// and not using comparison operators or such
const firstName = prompt("Enter your first name");
if (!firstName) {
  firstName = prompt("Try again");
}
