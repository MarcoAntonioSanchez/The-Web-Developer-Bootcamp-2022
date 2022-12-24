// Const and arrays
// Why people use const with arrays?

// The values can change
// As long as the reference remains the same

const nums = [1, 2, 3];
nums.push(4);
nums; // 1, 2, 3, 4

// The const nums remains the same, but the values changed.
// This can't be done with const containing directly values
// but with arrays you can.
