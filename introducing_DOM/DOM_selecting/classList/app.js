// Saving the first h2 tag into a variable
const h2 = document.querySelector("h2");

// One way to assign a class to an element
// h2.setAttribute("class", "purple");
// This way, the class attribute gets updated totally
// not letting space for extra classes to be assigned

console.log(h2.classList);

// Adding a class of grey to the h2 tag
h2.classList.add("grey");
// Adding a class of border to the h2 tag
h2.classList.add("border");

// Removing the border class from the h2 tag
h2.classList.remove("border");

// Checking if it contains a class of grey intro the h2 tag
h2.classList.contains("grey");
// Putput: true

// Turning into false / true the grey class into the h2 tag
h2.classList.toggle("grey");
