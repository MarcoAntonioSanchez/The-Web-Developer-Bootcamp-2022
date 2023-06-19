// ENTER PROMISES
// A promise is an object representing the eventual completion or failure of an asynchronous operation

// THE CALLBACK VERSION
// Start saving a function into a constant, that will handle url, success and failure parameters
const fakeRequestCallback = (url, success, failure) => {
  // Then a constant delay is started with a random number, times 4500 + 500
  const delay = Math.floor(Math.random() * 4500) + 500;
  // A timeout state is started along
  setTimeout(() => {
    // If the random delay generated is greater than 4000
    if (delay > 4000) {
      // The failure handler comes in
      failure("Connection Timeout :(");
      // If not, or everuthing else
    } else {
      // The success handler is run, instead
      success(`Here is your fake data from ${url}`);
    }
    // Delay set as constant
  }, delay);
};

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

/* // Calling the fake request callback, passing the books.com/page1 for the 1st callback
// The second argument passed is a function containing a response as well
fakeRequestCallback("books.com/page1", function (response) {
  // Printing the it worked text on success
  console.log("It worked!");
  // Along with the response, wich is the success handler
  console.log(response);
  // A second nested fake request callback is run
  fakeRequestCallback(
    // This time we passed the books.com/page2 as url
    "books.com/page2",
    // Same response funcion as before
    function (response) {
      // Printing the same data as before
      console.log("Ir worked, 2nd request");
      console.log(response);
      // A third fake request callback function is called
      fakeRequestCallback(
        // For least, with the books.com/page3 as url
        "books.com/page3",
        function (response) {
          console.log("It worked, 3rd request");
          console.log(response);
        },
        // 3 Error nested handlers for each success callback above
        function (err) {
          console.log("Error, 3rd request", err);
        }
      );
    },
    function (err) {
      console.log("Error, 2nd request", err);
    }
  );
}),
  function (err) {
    console.log("Error!", err);
  }; */

// First fake request promise version
/* fakeRequestPromise("yelp.com/api/coffee/page1")
  .then(() => {
    console.log("promise 1 resolved");
    console.log("It worked!");
    fakeRequestPromise("yelp.com/api/coffee/page2")
      .then(() => {
        console.log("promise 2 resolved");
        console.log("It worked!");
        fakeRequestPromise("yelp.com/api/coffee/page3")
          .then(() => {
            console.log("promise 3 resolved");
            console.log("It worked!");
          })
          .catch(() => {
            console.log("promise 3 rejected");
            console.log("Ho no, error");
          });
      })
      .catch(() => {
        console.log("promise 2 rejected");
        console.log("Ho no, error");
      });
  })
  .catch(() => {
    console.log("promise 1 rejected");
    console.log("Ho no, error");
  });
 */

// Refactored version
fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("It worked!, 1");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("It worked!, 2");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page3").then((data) => {
      console.log("It worked!, 3");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log("Ho no, the request failed");
    console.log(err);
  });
