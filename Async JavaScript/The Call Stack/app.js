// CALL STACK
// The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.
// How JS "knows" what function is currently beign run and what functions are called from whitin that function, etc.

// HOW IT WORKS
// When a scriot calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
// Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
// When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

// A constant with the name of multiply is set to a simple arrow function that takes x and y passed arguments to multiply them using the * operator
const multiply = (x, y) => x * y;

// Another constant with the name of square is initialized with x as passed argument and with a simple arrow function that takes x to passed to the multiply constant/function
// to multiply it by it self (x, x)
const square = (x) => multiply(x, x);

// The last constant with the name of isRightTriangle will receive 3 arguments passed and then run's a arrow function
// to multiply the a, b, and c arguments by it self's using the square constant/function, wich will use the passed arguments to the multiply constant/function
// to get a value for each a, b and c arguments.
const isRightTriangle = (a, b, c) => {
  // Then it will check if the added values of a and b (a plus b = 9 plus 16) is stricly equals to 25
  square(a) + square(b) === square(c);
};

// Calling the function with 3, 4 and 5 as passed arguments
isRightTriangle(3, 4, 5);

// RESUME
// The call stack will add the code in order the functions are called and use them to get the return value that needs so the JS code can be runned in order.
