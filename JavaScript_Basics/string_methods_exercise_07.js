// String methods exercise:

// Let's get some practice working with string methods.
// Without altering the original value stored in message,
// please define a variable called whisper that is a lowercased
// version of message, with all the extra space at the beginning
// and end removed.
// You will need to use two string methods that we just covered.
// Don't forget you can chain them together on a single line!

const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// Answer:
let whisper = message.trim().toLowerCase();

// Exp. : First we trom() the spaces at the beggining and end
// for the least we convert the string to lower case.
