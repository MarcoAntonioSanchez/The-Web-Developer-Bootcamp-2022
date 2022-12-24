// Modifyng objects with JS

const midterms = {
  danielle: 96,
  thomas: 78,
};

midterms;
// danielle: "96", thomas: "78"

// Changing / updating a value from an object
midterms.thomas = 79;

midterms;
// danielle: "96", thomas: "79"
midterms["danielle"] = "A";
midterms["thomas"] = "C+";

midterms;
// danielle: "A", thomas: "C+"

// Pushing key-values to the end of the object:
midterms.ezra = "B-";
midterms.antonio = "A-";
midterms;
// danielle: "A", thomas: "C+", ezra: "B-", antonio: "A-"
