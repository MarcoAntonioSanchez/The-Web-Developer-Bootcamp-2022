// Spread in array literals

// Create a new array using an existing array.
// Spreads the elements from one array intro a new array

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[...nums1, ...nums2];
// [1, 2, 3, 4, 5, 6]

["a", "b", ...nums2];
// ["a", "b", 4, 5, 6]

[...nums1, ...nums2, 7, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

// While using spread in array literals, you'll be creating
// a copy of the original array, so if you modify the copy,
// the original won't get affected
const allPets = [...cats, ...dogs];

// You can aslgo add arguments
const allPetsCopy = [...cats, ...dogs, "Speedy"];
// Output: ["Blue", "Scout", "Rocket", "Rusty", "Wyatt", "Speedy"]
