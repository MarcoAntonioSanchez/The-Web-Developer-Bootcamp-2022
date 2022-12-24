// Looping over arrays

// Making the array of animals, why not
const animals = ["lions", "tigers", "bears"];

// Starting the loop on cero, while the index is as long as
// the array length, loops continues, adding 1 each time the loop runs
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

// To loop over an array, start at index 0 and
// continue looping to until last indexa (length-1)

// Printing out the animals from last to cero
// the .length - 1 part in the loop is because from 0 to the
// length of the array will not be the actual length doe to
// the starting / ending point set at 0
for (let i = animals.length - 1; i >= 0; i--) {
  console.log(animals[i]);
}
