// String methods with arguments

// thing.method(argument);
// Some methods accept arguments that modify they behavior.
// Think of them as inputs that we can pass in.
// We pass these arguments inside of the parentheses.

// indexOf();

let tvShow = "catdog";

tvShow.indexOf("cat"); // 0
tvShow.indexOf("dog"); // 3
tvShow.indexOf("z"); // -1 (not found)

// With indexaOf() youll always get the first appearance of the
// character looked for inside the parentheses.

// slice();

let str = "supercalifragilisticexpialidocious";
str.slice(0, 5); // 'super'
str.slice(5); // 'califragilisticexpialidocious'

// You can use slice(); with negative numbers and this will cause
// to start indexing from the end of the string where slice(); is used.

str.slice(-5); // 'cious'

// Replace

let annoyingLaugh = "teehee so funny! teehee!";
annoyingLaugh.replace("teehee", "haha"); // 'haha so funny! teehee!'

// Notice that it only replaces the first instance
// Not all string methods are supported for all web explorers.
// Visit the MDN docs to make sure before using any of these methods.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
