// First example not using the callback, instead we just add the lines of code
// with a set Timeout function in incremental invervals so they won't run at the same time
/* setTimeout(function () {
  document.body.style.backgroundColor = "orange";
}, 1000);

setTimeout(function () {
  document.body.style.backgroundColor = "red";
}, 2000);

setTimeout(function () {
  document.body.style.backgroundColor = "yellow";
}, 3000);
 */

// Second example using a nesting structure, still not callback examples here but quite similar
/* setTimeout(function () {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "orange";
    setTimeout(function () {
      document.body.style.backgroundColor = "yellow";
    }, 1000);
  }, 1000);
}, 1000); */

// Using a function to manage the 3 arguments needed in the callback coded below
// 3 arguments are passed, newColor, delay and doNext, respectively
const delayedColorChange = (newColor, delay, doNext) => {
  // Then we set a timeOut function with a arrow function inside
  setTimeout(() => {
    // The document's body style attribute for background color will change it's value to the new color
    document.body.style.backgroundColor = newColor;
    // And then the do next is runned as a function
    doNext && doNext();
    // At the end, the delay will be received as a passed argument, of/for delay
  }, delay);
};

// The delayedColorChange function is called with the 3 arguments passed: color, time delay and the next funciont call as callback
delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("teal", 1000, () => {
        delayedColorChange("olive", 1000, () => {});
      });
    });
  });
});

// This is a example of a basic callback structure, beyond this you can spect to live a callback hell, try not to
searchMoviesAPI("amadeus", () => {
  saveToMyDB(
    movies,
    () => {
      // If this works, run thhis:
    },
    () => {
      // If this doesn't work, run this:
    },
    () => {
      // If API is down, or request failed...
    }
  );
});
