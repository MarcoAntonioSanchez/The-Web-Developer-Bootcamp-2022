// Double equals (==)

// Checks for equality of value, but not equality of type.
// It coerces both values to the same type and then compares them.
// This can lead yo some unexpected results.

1 == 1; // true

1 == "1"; // true, but not the same
// (==) double equals doesn't care about types.

null == undefined; // true

1 == 2; // false

"a" == "b"; // false

0 == false; // true

// Triple equals (===)

// Checks for equality of value and type.

5 === 5; // true
1 === 2; // false
2 === "2"; // false
false === 0; // false

// Same applies for != and !==
10 != "10"; // false
10 !== "10"; // true

1 != 2; // true

1 != "1"; // false

1 !== "1"; // true

// It is recommended to developers, that they use the tiple equal
// (===), tough it's just a consideration.
