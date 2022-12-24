// Swith

// The switch statement is another control.flo statement
// that can replace multiple if statements.

// I find the syntax unwieldy and hard to remember, but it's
// good to know about.

// Using swtich
const day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break; // If you dont add the break after each case, the code would keep running
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6: // Setting two cases like this means that both respond to the same statement / or case
  case 7:
    console.log("Weekend!");
    break;
  default: // Similar to else statement at the end of an else if, default acts for everything else outside the cases
    console.log("Woaa wow wo what day is this?");
}

// Using else if
const anotherDay = 1;
if (anotherDay === 1) {
  console.log("Monday");
} else if (anotherDay === 2) {
  console.log("Tuesday");
} else if (anotherDay === 3) {
  console.log("Wednesday");
} else if (anotherDay === 4) {
  console.log("Thursday");
} else if (anotherDay === 5) {
  console.log("Friday");
} else if (anotherDay === 6) {
  console.log("Sathurday");
} else {
  console.log("Sunday");
}
