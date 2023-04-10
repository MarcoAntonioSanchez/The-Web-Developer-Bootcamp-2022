const tweetForm = document.querySelector("#tweetForm");
// Selecting and saving the ul list into a variable, tweets
const tweetsContainer = document.querySelector("#tweets");

// Adding an event listener to the submit button
// With an event variable to prevent default behavior, e
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Selecting and saving both input values into variables
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  // Passing the usernameInput and tweetInput values
  // to the addTweet function
  addTweet(usernameInput.value, tweetInput.value);
  // Reset to both input valus at the end
  usernameInput.value = "";
  tweetInput.value = "";
});

// Declaring a add tweet function
// With username, and tweet as data passed by
const addTweet = (username, tweet) => {
  // Create 2 elements, li and b tags
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  // Appending the username value to the b tag
  bTag.append(username);
  // Appending the b tag to the new tweet, the li
  newTweet.append(bTag);
  // Appending the tweets text line, next to the b tag
  newTweet.append(` - ${tweet}`);
  // Appending the li element into the ul
  tweetsContainer.append(newTweet);
};
