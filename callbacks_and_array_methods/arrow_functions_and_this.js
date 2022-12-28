// Arrow functions and this
// Arrow functions behave very differently

// Simple person object with names
const person = {
  firstName: "Vigo",
  lastName: "Mortensen",
  fullName: function () {
    // The "this" keyword makes reference to the value that
    // will be on the left of the attribute
    return `${this.firstName} ${this.lastName}`;
  },
};
// Output: "Vigo Mortensen"

// Copy of the simple person object with names
const anotherPerson = {
  firstName: "Keanu",
  lastName: "Reves",
  fullName: () => {
    // Arow function instead of regular expression
    return `${this.firstName} ${this.lastName}`;
  },
};
// Output: "undefined undefined"
// Again, the arrow functions make reference to the window. object
// this is why the .firstName and .lastName are undefined, becasue
// they don't exist in the window. object

// Another copy of the simple person object with names
const personCopy = {
  firstName: "Tom",
  lastName: "Cruise",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
  // We add an extra method that will wait 3 secs. before
  // showing in console the fullName method
  shoutName: function () {
    setTimeout(function () {
      console.log(this.fullName);
    }, 3000);
  },
};
// Output: this.fullName is not a function
// setTimeout also makes reference to the windows. object
// because it is located as: setTimeout.window, resulting undefined too

const anotherPersonCopy = {
  firstName: "Snoop",
  lastName: "Dogg",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    // Now we are using an arrow function, to set the timeOut
    // wait in seconds, will this scape the window. object?
    setTimeout(() => {
      console.log(this.fullName);
    }, 3000);
  },
};
// Output: "undefined undefined"
// 3 seconds later...
// Output: anotherPersonCopy{firstName: "Snoop", lastName: "Dogg", fullName: etc...}

// It does!, this is why and how arrow functions works different
// from the regular function expression
