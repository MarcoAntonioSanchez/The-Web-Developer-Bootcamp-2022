// ask the user for an input
let input = prompt("What would you like to do");

// starting up the todos list
const todos = ["collect eggs", "feed the dog"];

// while loop to ask input until the user enters "quit" or "q"
while (input !== "quit" && input !== "q") {
  // if the user enter "list"
  if (input === "list") {
    // print out pretty starts at the beginning
    console.log("************");
    // for loop to print out all todos in the aray
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    // more pretty stars to finish
    console.log("************");
    // if the user enter "new"
  } else if (input === "new") {
    // ask the user for the name of the task / todo
    const newTodo = prompt("Ok, what is the new todo?");
    // insert the new todo at the end of the array
    todos.push(newTodo);
    // alert of todo added
    console.log(`${newTodo} added to the list`);
    // if the user enter "delete"
  } else if (input === "delete") {
    // ask the user for the index of the todo to delete, only numbers
    const index = parseInt(prompt("Ok, enter an index to delete"));
    // if the user enters a number
    if (!Number.isNaN(index)) {
      // the todo indexed is deleted
      const deleted = todos.splice(index, 1);
      // todo deleted gets printed out in console
      console.log(`Ok ${deleted} deleted`);
      // for every other input, reply unknown
    } else {
      console.log("Unknown index");
    }
  }
  // back to the loop
  input = prompt("What would you like to do");
}
console.log("Ok, you quit the app");
