// Else
// If nothing else was true, do this...

const dayOfWeek = prompt("Enter a day:").toLocaleLowerCase();

if (dayOfWeek === "monday") {
  console.log("Ugh i hate mondays");
} else if (dayOfWeek === "saturday") {
  console.log("Yey i love saturdays");
} else if (dayOfWeek === "friday") {
  console.log("Fridays are decent, specially after work");
} else if (dayOfWeek === "tuesday") {
  console.log("Meh");
} else if (dayOfWeek === "wednesday") {
  console.log("Aja...");
} else if (dayOfWeek === "thursday") {
  console.log("Yeap");
} else {
  console.log("Sunday! this is awesome");
}
