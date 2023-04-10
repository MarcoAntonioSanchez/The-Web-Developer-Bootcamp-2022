// Selecting the div container to nest the next tags
const container = document.querySelector("#container");

// Saving the base URL to the pokeapi sprite, for iteration
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// Begins a for loop, until 151 times
for (let i = 1; i <= 151; i++) {
  // Create pokemon element, div tag
  const pokemon = document.createElement("div");
  // Add pokemon class to the recently created div element
  pokemon.classList.add("pokemon");
  // Create a label element, span tag
  const label = document.createElement("span");
  // Concatenate the inner text to a hashtag with the loop number
  label.innerText = `#${i}`;
  // Create new image element, img tag
  const newImg = document.createElement("img");
  // Updating the source atribute from the img tag so iterate a number from the base URL
  newImg.src = `${baseURL}${i}.png`;
  // Inserting the new img tag into the pokemon div
  pokemon.appendChild(newImg);
  // Inserting the new label tag into the pokemon div
  pokemon.appendChild(label);
  // Inserting the pokemon div into the main container
  container.appendChild(pokemon);
}
