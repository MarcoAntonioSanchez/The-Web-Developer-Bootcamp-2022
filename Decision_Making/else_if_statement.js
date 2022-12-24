// Else if statement
// If not the first thing, maybe thos other thing...?

let rating = 2;

if (rating === 3) {
  console.log("You are a superstar!");
} else if (rating === 2) {
  console.log("Meets expectations");
}

// We can add multiple else ifs

let ratingTwo = 1;

if (ratingTwo === 3) {
  console.log("you are a superstar");
} else if (ratingTwo === 2) {
  console.log("meets expectations");
} else if (ratingTwo === 1) {
  console.log("needs improvement");
}

// For example:

const dayOfWeek = "Monday";

if (dayOfWeek === "Monday") {
  console.log("Ugh i hate mondays");
} else if (dayOfWeek === "Saturday") {
  console.log("Yey i love saturdays");
} else if (dayOfWeek === "Friday") {
  console.log("Fridays are decent, specially after work");
}

// Another example

// 0-5 free
// 5-10 child $10
// 10 - 65 adult $20
// 65+ senior $10

const age = 8;

if (age < 5) {
  console.log("You are a baby. You get in for free");
} else if (age < 10) {
  console.log("You are a child. You pay $10");
} else if (age < 65) {
  console.log("You are an adultl. You pay $20");
} else if (age > 65) {
  console.log("You are a senior. You can get it for $10");
}
