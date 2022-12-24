// Arrays random access

// Arrays are indexed:

// Doc Dopey Bashful Grumpy Sneezy Sleepy Happy
// 0   1     2       3      4      5      6

// Each element has a corresponding index (counting starts at 0)

// Accesing elements inside an array, is the same as if we
// where indexing strings, for example:
let days = ["Monday", "Tuesday", "Wednesday"];
days[0]; // "Monday"

// We can sub-index into the arrays values:
days[0][0]; // "M"

// Let's make an ulgy name for values, array:
let spooky = ["Ret", "Witcs", "Zomb1e"];

// Lets fix it
spooky[0] = "Rat";
spooky[1] = "Witch";
spooky[2] = "Zombie";

spooky;
// "Rat", "Witch", "Zombie"

// You can update values inside arrays just by indexing them
// and assign them (=)
