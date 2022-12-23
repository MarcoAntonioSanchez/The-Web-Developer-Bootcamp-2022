// Comparison

// > // greater than
// < // less than
// >= // greater than or equal to
// <= // less than or qeual to
// == // equality
// != // not equal
// === // strict equality
// !== // strict non-equality

1 < 3; // true
1 > 3; // false
1 > -1; // false
1 > 20; // false
1 <= 1; // true
1 <= 10; // true

// Let's say you are making a +18 website, you can compare the age
// of your visitors with a number, for example:
let age = 31;
age >= 18;
// true

// Some examples:

// 10 > 1; // true
// 0.2 > 0.3; - // false
// 10 <0; // true
// 50.5 < 5; // false
// 0.5 <= 0.5; // true
// 99 >= 4; // true
// 99 >= 99; // true

// Notice these all return a boolean
// Though it's uncommon, you can compare strings.
// Just be careful, things get dicey when dealing with case,
// speacial chacracters and accents
