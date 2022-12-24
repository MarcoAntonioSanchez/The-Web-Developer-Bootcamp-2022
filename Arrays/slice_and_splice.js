// Slice and splice

// Slice - cut elements from an array
let colors = ["red", "blue", "white", "black", "green", "purple"];
colors.slice(3); // will cut from the 3rd element in the array to the end

let coolColors = colors.slice(3);
coolColors;
// "black", "green", "pruple"

let notCoolColors = colors.slice(0, 2);
notCoolColors;
// "red", "blue", "white"

// Splice -
colors.splice(2, 2); // from array colors, erase the index #2, two elements
// "white", "black"
colors;
// "red", "blue", "green", "purple"

colors.splice(1, 0, "red-blueish"); // from index 1, don't remove, but add "red-blueish"
colors;
// "red", "red-blueish", "blue", "green", "purple"
