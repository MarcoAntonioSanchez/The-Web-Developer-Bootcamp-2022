// The mysterious keyword "this"

// This in methods
// Use the keyword this to access other properties on the same object

const person = {
  first: "Robert",
  last: "Herjavec",
  fullName() {
    return `${this.first} ${this.last}`;
  },
};
person.fullName(); // "Robert Herjavec"
person.last = "Plant";
person.fullName; // "Robert Plant"

// Creating an object that contains key-value pairs and a method
// as a property, or various methods like functions to treat o access
// the other poperties inside the object.
const cat = {
  name: "blue",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says Meoooow`);
  },
};
cat.meow(); // "blue says Meoooow"

// The value of this depends on the invocation context
// of the function it is used

const meowCopy = cat.meow;
// Calling the mehod inside the object this way, won't be able
// to read the properties but the object itself, resulting in "blank" says meoooow
meowCopy(); // " says meoooow"

// By defining a function this get's added on a top level
// object called "window."

// The keyword "this" is referenced to the "window."" object
// this is why the manner of executing or calling a function matters
// when treating methods
