// Concat indexaOf includes and reverse

// Concat - Combine two arrays
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

let arrayConcat = array1.concat(array2);

// Includes - Yes or no is it present this single item
array1.includes(1); // true
array2.includes(7); // true

// indexOf() - Position where the value looked for is
arrayConcat.indexOf(3); // 2
arrayConcat.indexOf(99); // undefined

// Reverse - Just reverse the order of the array (values)
array1.reverse();
array1;
// 4, 3, 2, 1
