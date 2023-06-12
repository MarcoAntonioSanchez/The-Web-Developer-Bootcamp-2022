// EVENTS
// Responding to user inputs and actions

// Using this solution, the click event will only work on existing li's over the HTML markup
// but not with the new ones added using the addTwwt function.

// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", function () {
//     li.remove();
//   });
// }

// To solve this, we can use "Event Delegation".

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);
  tweetsContainer.append(newTweet);
};

// Event delegation over the parent ul of the target li's, using closest property
tweetsContainer.addEventListener("click", function (e) {
  e.target.closest("LI") && e.target.closest("LI").remove();
});
